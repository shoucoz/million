import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { checkAreAwswersCorrect, checkAreAllAnswersDone } from 'utils';
import data from 'constants/data.json';
import { IQuestion } from "shared/interfaces";
import { OVER_URL } from 'constants/routes';

export const useGameController = () => {
    const [activeQuestion, setActiveQuestion] = useState<IQuestion>(data?.questions[0]);
    const [userAnswers, setUserAnswers] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const history = useNavigate();

    const handleResetGame = () => {
        setUserAnswers([]);
        setActiveQuestion(data?.questions[0]);
    }

    const handleQuestionChange = () => {
        const nextQuestion: IQuestion | undefined = data.questions.find((question) => question.id === activeQuestion.id + 1);
        if(!nextQuestion) {
            handleResetGame();
            history(OVER_URL, { state: { totalAmount: activeQuestion.price }});
            return;
        }
    
        if(nextQuestion) {
            setActiveQuestion(nextQuestion);
            return;
        }
    }

    useEffect(() => {
        if(!userAnswers.length) {
            return;
        }

        setTimeout(() => {
            setIsLoading(false);

            const areAwswersCorrect = checkAreAwswersCorrect(activeQuestion.correctAnswerIds, userAnswers);
            const areAllAnswersDone = checkAreAllAnswersDone(userAnswers.length, activeQuestion.correctAnswerIds.length);
        
            if(!areAwswersCorrect) {
                handleResetGame();
                history(OVER_URL, { state: { totalAmount: 0 }});
                return;
            }
        
            if(!areAllAnswersDone) {
                return;
            }
        
            setUserAnswers([]);
            handleQuestionChange();
        }, 2500)

        
    }, [userAnswers])

    const setUserAnswersHandler = (id: string): void => {
        setIsLoading(true);
        setUserAnswers([...userAnswers, id]);
    }

     return {
        userAnswers,
        setUserAnswersHandler,
        isLoading,
        activeQuestion
     } 
}