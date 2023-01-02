import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import DropdownItem from "../DropdownItem/DropdownItem";

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
    function handleThemeClick(text) {
        setParams(prev => ({...prev, search: text.toLowerCase()}));
        setSearch(text.toLowerCase());
    }
    return <header>
        <div className="header-content">
            <div className="header-info-div">
                <p className="p-large">Olá,</p>
                <h2>{user.name}</h2>
            </div>
            <div id="header-navigation-container">
                <p onClick={() => navigate('/history')} className="p-medium">Histórico</p>
                <div className="dropdown">
                    <p className="p-medium">Temas</p>
                    <div className="dropdown-content">
                        <DropdownItem onClick={handleThemeClick} hr={true} text="HTML"/>
                        <DropdownItem onClick={handleThemeClick} hr={true} text="UX"/>
                        <DropdownItem onClick={handleThemeClick} hr={true} text="Swift"/>
                        <DropdownItem onClick={handleThemeClick} text="UI"/>
                    </div>
                </div>
                    
                <SearchInput onKeyDown={e => {
                    if(e.key === "Enter") setParams({search: `${search}`})
                }}onSearch={() => {
                    setParams({search: `${search}`});
                }} value={search} onChange={handleSearchChange} placeholder="Pesquisar quiz"/>
            </div>
        </div>
    </header>
}