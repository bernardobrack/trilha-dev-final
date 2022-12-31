import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";

export default function Header({ user }) {
    return <header>
        <div id="header-content">
            <div id="header-name-div">
                <p className="p-large">Olá,</p>
                <h2>{user.name}</h2>
            </div>
            <div id="header-navigation-container">
                <p className="p-medium">Histórico</p>
                <p className="p-medium">Temas</p>
                <SearchInput />
            </div>
        </div>
    </header>
}