import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"
import { useFetch } from "../../hooks/useFetch";
import Header from "../Header/Header";
import "./Home.css";

export default function Home() {
    
    const { user } = useContext(AppContext);
    const { data, error, isLoading } = useFetch('quizzes');
    console.log(data);
    return <div className="home-page">
        <Header user={user}/>
    </div>
}