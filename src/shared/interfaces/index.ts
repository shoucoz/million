export interface IQuestion {
    id: number;
    question: string;
    options: IOption[];
    correctAnswerIds: string[];
    price: number;
    isAnswered: boolean;
}

export interface IOption {
    id: string;
    text: string;
}