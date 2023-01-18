import { useContext } from "react";
import Button from 'shared/components/Button';
import { GameContext } from 'context'
import { getOptionClassName } from 'utils';

const Question = () => {
    const gameStore = useContext(GameContext);
    const { activeQuestion, isLoading, setUserAnswersHandler, userAnswers } = gameStore;
    const { options, question, correctAnswerIds } = activeQuestion; 

    return (
        <div className="page-game-content">
            <h3 className="page-game-question">{question}</h3>
            <div className={`${isLoading ? 'pointer-events-none' : ''} page-game-options`}>
                {
                    options.map((option: any) => (
                        <Button 
                            key={option.id} 
                            text={(
                                <>
                                    <span className="color-orange-100">{option.id} </span> 
                                    {option.text}
                                </>
                            )} 
                            onClick={() => setUserAnswersHandler(option.id)} 
                            className={`option ${getOptionClassName(option.id, userAnswers, correctAnswerIds)}`}
                        />
                    ))
                }
            </div>
        </div>
    )
} 

export default Question