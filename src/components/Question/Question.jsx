import "./Question.css";
import Option from "../Option/Option";
import { useState } from "react";

export default function Question({ questionInfo, questionNumber, questionAmount, setShowButton, showType, setShowType }) {
    //console.log(questionInfo)
    function handleOptionClick(index) {
        setShowType(prev => {
            const newArray = [...prev];
            newArray[index] = true;
            newArray[questionInfo.correct_answer_index] = true;
            return newArray;
        });
        setShowButton(true);
    }
    return <div className="question-div">
        <div className="question-text">
            <p className="p-large">{questionNumber} de {questionAmount}</p>
            <h4>{questionInfo.question_text}</h4>
        </div>
        <img src={questionInfo.banner_image} alt="imagem da pergunta" />
        {questionInfo?.answers?.map((answer, index) => {
            return <Option
                onClick={handleOptionClick}
                showType={showType[index]}
                correct={questionInfo.correct_answer_index === index} 
                letter={String.fromCharCode(65 + index)} 
                key={`${questionInfo.id}-${index}`}
                text={answer}
                index={index}/>})
        }

    </div>
}