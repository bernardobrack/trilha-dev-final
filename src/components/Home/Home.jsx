import { AppContext } from "../AppProvider/AppProvider"
import { useContext } from "react"

export default function Home() {
    
    const { user } = useContext(AppContext);
    console.log(user);
    return <p>Protected Route</p>
}