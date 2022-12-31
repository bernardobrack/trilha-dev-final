import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"
import { useFetch } from "../../hooks/useFetch";
import Header from "../Header/Header";
import "./Home.css";
import QuizCard from "../QuizCard/QuizCard";
export default function Home() {
    
    const { user } = useContext(AppContext);
    const { data, error, isLoading } = useFetch('quizzes');
    console.log(data);
    return <div className="home-page">
        <Header user={user}/>
        <div id="home-page-content">
            <section className="grid" id="home-page-grid">
                {data && data.map(quiz => <QuizCard key={quiz.id} quizInfo={quiz}/>)}
            </section>
        </div>
    </div>
}