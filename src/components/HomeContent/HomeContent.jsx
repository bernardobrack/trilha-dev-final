import "../Home/Home.css";
import QuizCard from "../QuizCard/QuizCard";
import { fetcher } from "../../hooks/helper";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";

export default function HomeContent() {
    const [params, setParams] = useSearchParams();
    const { data, error, isLoading } = useSWR( params.get("search") ? `quizzes?search=${params.get("search")}` : 'quizzes', fetcher);
    return <div id="home-page-content">
    <section className="grid" id="home-page-grid">
        {data && data.map(quiz => <QuizCard key={quiz.id} quizInfo={quiz}/>)}
    </section>
</div>
}