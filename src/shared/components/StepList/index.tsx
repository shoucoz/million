import { useContext } from "react";
import Step from "shared/components/Step";
import { GameContext } from 'context'
import data from 'constants/data.json';
import { IQuestion } from 'shared/interfaces';
import "./styles.scss";

const StepList = () => {
    const gameStore = useContext(GameContext);
    const { activeQuestion } = gameStore;
    const { questions } = data;
    const questionsSorted = [...questions].sort((a: IQuestion, b: IQuestion) => b.price - a.price);
    const getStepClassName = (activePrice: number, stepPrice: number) => {
        if(activePrice > stepPrice) {
            return 'step-answered';
        }
        if(activePrice === stepPrice) {
            return 'step-current';
        }

        return '';
    }

    return (
        <div className="step-list">
            {questionsSorted.map((question: IQuestion) => (
               <Step key={question.id} text={`$${question.price}`} className={getStepClassName(activeQuestion.price as number, question.price)}/> 
            ))}
        </div>
    )
}

export default StepList;