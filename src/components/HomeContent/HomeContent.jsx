import "../Home/Home.css";
import QuizCard from "../QuizCard/QuizCard";
import { fetcher } from "../../hooks/helper";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import QuizNotFound from "../QuizNotFound/QuizNotFound";
import Loader from "../Loader/Loader";

export default function HomeContent() {
    const [params] = useSearchParams();
    const { data } = useSWR( params.get("search") ? `quizzes?search=${params.get("search")}` : 'quizzes', fetcher);
    return <div id="home-page-content">
        {data && data.length>0 && <section className="grid" id="home-page-grid">
            {data.map(quiz => <QuizCard key={quiz.id} quizInfo={quiz}/>)}
        </section>}
        {!data && <Loader/>}
        {(data?.length<=0) && <QuizNotFound />}
    </div>
}