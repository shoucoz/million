import { ReactNode } from "react";

interface IButton {
    text: string | ReactNode,
    className: string,
    onClick: (params: any) => void
}


export default IButton;