import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"
import { useFetch } from "../../hooks/useFetch";
import Header from "../Header/Header";

export default function Home() {
    
    const { user } = useContext(AppContext);
    const { data, error, isLoading } = useFetch('quizzes');
    console.log(data);
    return <Header user={user}/>
}