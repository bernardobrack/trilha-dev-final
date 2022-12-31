import "../Home/Home.css";
import { useFetch } from "../../hooks/useFetch";
import QuizCard from "../QuizCard/QuizCard";

export default function HomeContent() {
    const { data, error, isLoading } = useFetch('quizzes');
    return <div id="home-page-content">
    <section className="grid" id="home-page-grid">
        {data && data.map(quiz => <QuizCard key={quiz.id} quizInfo={quiz}/>)}
    </section>
</div>
}