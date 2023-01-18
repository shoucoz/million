import IButton from "shared/components/Button/Interfaces";
import "./styles.scss";

const Button: React.FC<IButton> = ({text, className, onClick}) => <button className={className || ''} onClick={onClick}>{text}</button>

export default Button;