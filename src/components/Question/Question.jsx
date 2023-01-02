import "./Question.css";
import Option from "../Option/Option";

export default function Question({ questionInfo, questionNumber, questionAmount }) {
    console.log(questionInfo)
    return <div className="question-div">
        <div className="question-text">
            <p className="p-large">{questionNumber} de {questionAmount}</p>
            <h4>{questionInfo.question_text}</h4>
        </div>
        <img src={questionInfo.banner_image} alt="imagem da pergunta" />
        {questionInfo?.answers?.map((answer, index) => <Option 
                                                            letter={String.fromCharCode(65 + index)} 
                                                            key={index}
                                                            text={answer}/>)}

    </div>
}