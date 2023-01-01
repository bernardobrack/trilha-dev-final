import { useNavigate } from "react-router-dom";
import PrevButton from "../PrevButton/PrevButton"
import "./HistoryHeader.css";

export default function HistoryHeader() {
    const navigate = useNavigate();
    
    return <header>
        <div className="header-content">
            <div id="history-header-div" className="header-info-div">
                <PrevButton onClick={() => navigate("/home")}/>
                <h2>Seu histórico</h2>
            </div>
        </div>
    </header>
}