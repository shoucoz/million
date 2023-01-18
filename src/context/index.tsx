import React, { createContext } from "react";
import { useGameController } from 'hooks/useGameController';

export const GameContext = createContext({
    activeQuestion: {
        price: 0,
        correctAnswerIds: [''],
        options: [{id: '', text: ''}],
        question: ''
    }, 
    isLoading: false, 
    setUserAnswersHandler: (id: string) => {}, 
    userAnswers: [''],
});

const GameContextProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const { activeQuestion, isLoading, setUserAnswersHandler, userAnswers } = useGameController();

    return (
        <GameContext.Provider value={{ activeQuestion, isLoading, setUserAnswersHandler, userAnswers }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;