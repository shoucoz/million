export const checkAreAwswersCorrect = (correctAnswers: Array<string>, userAnswers: Array<string>): boolean => userAnswers.every((userAnswer) => correctAnswers.includes(userAnswer))
export const checkAreAllAnswersDone = (userAnswersLength: number, correctAnswersLingth: number): boolean => userAnswersLength === correctAnswersLingth;
export const getOptionClassName = (id: string, userAnswers: Array<string>, correctAnswerIds: Array<string>): string => {
    if(userAnswers.includes(id)) {
        if(correctAnswerIds.includes(id)) {
            return 'option--success'
        }

        return 'option--wrong'
    }

    return ""
}