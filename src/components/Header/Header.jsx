import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const { user } = props;
    return <header>
        <div className="header-content">
            <div className="header-info-div">
                <p className="p-large">Olá,</p>
                <h2>{user.name}</h2>
            </div>
            <div id="header-navigation-container">
                <p onClick={() => navigate('/history')} className="p-medium">Histórico</p>
                <p className="p-medium">Temas</p>
                <SearchInput onSearch={() => {
                    setParams({search: `${search}`});
                }} value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar quiz"/>
            </div>
        </div>
    </header>
}