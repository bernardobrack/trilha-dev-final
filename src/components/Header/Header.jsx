import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";

export default function Header(props) {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const debouncedSearch = useCallback(
		debounce(value => {
            setParams(prev => ({...prev, search: value}));
        }, 500),
		[],
	);
    const { user } = props;
    function handleSearchChange(e) {
        setSearch(e.target.value);
        debouncedSearch(e.target.value);
    }
    return <header>
        <div className="header-content">
            <div className="header-info-div">
                <p className="p-large">Olá,</p>
                <h2>{user.name}</h2>
            </div>
            <div id="header-navigation-container">
                <p onClick={() => navigate('/history')} className="p-medium">Histórico</p>
                <p className="p-medium">Temas</p>
                <SearchInput onKeyDown={e => {
                    if(e.key === "Enter") setParams({search: `${search}`})
                }}onSearch={() => {
                    setParams({search: `${search}`});
                }} value={search} onChange={handleSearchChange} placeholder="Pesquisar quiz"/>
            </div>
        </div>
    </header>
}