import { useNavigate, useOutletContext } from "react-router-dom";
import Question from "../Question/Question";
import "./QuestionPage.css";
import "../QuestionPage/QuestionPage.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function QuestionPage() {
    const {questions, n} = useOutletContext();
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false);
    const [showType, setShowType] = useState(Array(questions.data[n-1].answers.length).fill(false));
    const [correct, setCorrect] = useState(0);
    function handleContinueClick() {
        if(questions.data.length == n) {
            navigate(`/quiz/${questions.id}/results?correct=${correct}&total=${questions.data.length}`);
            return;
        }
        setShowButton(false);
        setShowType(prev => prev.map(() => false));
        navigate(`/quiz/${questions.id}/question/${parseInt(n)+1}`);
    }
    return <div className="question-page-content">
        <Question setCorrect={setCorrect} disabled={showButton} setShowType={setShowType} showType={showType} setShowButton={setShowButton} questionInfo={questions.data[n-1]} questionNumber={n} questionAmount={questions.data.length}/>
        {showButton && <Button className="next-question-btn" onClick={handleContinueClick}>Continuar</Button>}
    </div>
        
}