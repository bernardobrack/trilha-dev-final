import { useNavigate } from "react-router-dom";
import PrevButton from "../PrevButton/PrevButton"
import "./SimpleHeader.css";
import "../Header/Header.css";

export default function SimpleHeader(props) {
    const navigate = useNavigate();
    const { onPrevClick, isHistory } = props;
    const headerId = isHistory ? "" : "simple";
    
    return <header id={headerId}>
        <div className="header-content">
            <div id="simple-header-div" className="header-info-div">
                <PrevButton onClick={() => navigate(onPrevClick)}/>
                {isHistory && <h2>Seu histórico</h2>}
            </div>
        </div>
    </header>
}