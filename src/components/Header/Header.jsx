import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";

export default function Header({ user }) {
    
    const navigate = useNavigate();
    return <header>
        <div className="header-content">
            <div className="header-info-div">
                <p className="p-large">Olá,</p>
                <h2>{user.name}</h2>
            </div>
            <div id="header-navigation-container">
                <p onClick={() => navigate('/history')} className="p-medium">Histórico</p>
                <p className="p-medium">Temas</p>
                <SearchInput placeholder="Pesquisar quiz"/>
            </div>
        </div>
    </header>
}