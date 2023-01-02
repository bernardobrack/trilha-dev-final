import "./Question.css";
import Option from "../Option/Option";

export default function Question({ setCorrect, questionInfo, questionNumber, questionAmount, setShowButton, showType, setShowType, disabled }) {
    function handleOptionClick(index, correct) {
        if(disabled) return;
        setShowType(prev => {
            const newArray = [...prev];
            newArray[index] = true;
            newArray[questionInfo.correct_answer_index-1] = true;
            return newArray;
        });
        setShowButton(true);
        if(correct) {
            setCorrect(prev => prev+1);
        }
    }
    return <div className="question-div">
        <div className="question-text">
            <p className="p-large">{questionNumber} de {questionAmount}</p>
            <h4>{questionInfo.question_text}</h4>
        </div>
        <img src={questionInfo.banner_image} alt="imagem da pergunta" />
        {questionInfo?.answers?.map((answer, index) => {
            return <Option
                disabled={disabled}
                onClick={handleOptionClick}
                showType={showType[index]}
                correct={questionInfo.correct_answer_index-1 === index} 
                letter={String.fromCharCode(65 + index)} 
                key={`${questionInfo.id}-${index}`}
                text={answer}
                index={index}/>})
        }

    </div>
}