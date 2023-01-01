import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"
import Header from "../Header/Header";
import "./Home.css";
import HomeContent from "../HomeContent/HomeContent";

export default function Home() {
    const { user } = useContext(AppContext);
    return <div className="page-content">
        <Header user={user}/>
        <HomeContent />
    </div>
}