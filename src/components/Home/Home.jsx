import { AppContext } from "../AppProvider/AppProvider"
import { useContext, useState } from "react"
import { useFetch } from "../../hooks/useFetch";
import Header from "../Header/Header";
import "./Home.css";
import HomeContent from "../HomeContent/HomeContent";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [params, setParams] = useSearchParams();
    const { user } = useContext(AppContext);
    return <div className="page-content">
        <Header user={user}/>
        <HomeContent />
    </div>
}