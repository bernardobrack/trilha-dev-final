import { useOutletContext } from "react-router-dom";
import Question from "../Question/Question";
import "./QuestionPage.css";
import "../QuestionPage/QuestionPage.css";

export default function QuestionPage() {
    const {data, n} = useOutletContext();
    //console.log(data.data, n);
    
    return <div className="question-page-content">
        <Question questionInfo={data.data[n-1]} questionNumber={n} questionAmount={data.data.length}/>
    </div>
        
}