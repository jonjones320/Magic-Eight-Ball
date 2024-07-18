import React, { useState } from "react";
import "./EightBall.css";
import { getAnswer } from "./answer"


const EightBall = ({ answers }) => {
    const [answer, setAnswer] = useState({ msg:"Think of a question", color: "black" });

    const handleClick = () => {
        const nextAnswer = getAnswer(answers);
        setAnswer(nextAnswer);
    }
    return (
        <div>
            <div className="eightBall" onClick={handleClick}>
                <div className="answerBox" style={{ backgroundColor: answer.color }}>
                    { answer.msg }
                </div>
            </div>
            <button className="shakeButton" onClick={handleClick}>
                Shake
            </button>
        </div>
    )
};

export default EightBall;