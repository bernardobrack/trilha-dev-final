import { useFetch } from "../../hooks/useFetch"
import QuizCard from "../QuizCard/QuizCard";
import "./HistoryContent.css";
import Loader from "../Loader/Loader";

export default function HistoryContent() {
    const { data, isLoading } = useFetch("quizzes?is_answered=true");
    return <div id="history-content-div">
        {isLoading ? <Loader className="center"/> : <div className="grid">
            {data && data.map(quiz => <QuizCard history={true} key={quiz.id} quizInfo={quiz} />)}
        </div>}
    </div> 
}