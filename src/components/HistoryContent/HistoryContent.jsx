import { useFetch } from "../../hooks/useFetch"
import QuizCard from "../QuizCard/QuizCard";
import "./HistoryContent.css";

export default function HistoryContent() {
    const { data } = useFetch("quizzes?is_answered=true");
    return <div id="history-content-div">
        <div className="grid">
            {data && data.map(quiz => <QuizCard history={true} key={quiz.id} quizInfo={quiz} />)}
        </div>
    </div> 
}