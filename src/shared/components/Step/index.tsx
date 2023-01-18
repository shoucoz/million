import React from 'react';
import { IStep } from './interfaces';
import "./styles.scss";

const Step: React.FC<IStep> = ({ text, className }) => (
    <span className={`step ${className || ''}`}>
        {text}
    </span>
)

export default Step;