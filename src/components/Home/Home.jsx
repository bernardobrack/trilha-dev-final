import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"
import Header from "../Header/Header";

export default function Home() {
    
    const { user } = useContext(AppContext);
    return <Header user={user}/>
}