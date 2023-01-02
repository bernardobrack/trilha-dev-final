import { useNavigate, useOutletContext } from "react-router-dom";
import Question from "../Question/Question";
import "./QuestionPage.css";
import "../QuestionPage/QuestionPage.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function QuestionPage() {
    const {data, n} = useOutletContext();
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false);
    const [showType, setShowType] = useState(Array(data.data[n-1].answers.length).fill(false));
    function handleOptionClick() {
        setShowButton(false);
        setShowType(prev => prev.map(item => false));
        navigate(`/quiz/${data.id}/question/${parseInt(n)+1}`);
    }
    return <div className="question-page-content">
        <Question setShowType={setShowType} showType={showType} setShowButton={setShowButton} questionInfo={data.data[n-1]} questionNumber={n} questionAmount={data.data.length}/>
        {showButton && <Button className="next-question-btn" onClick={handleOptionClick}>Continuar</Button>}
    </div>
        
}