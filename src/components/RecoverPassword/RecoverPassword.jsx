import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./RecoverPassword.css";

export default function RecoverPassword() {
    
    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        navigate("/");
    }
    return <div id="recover-password-div">
        <form onSubmit={handleFormSubmit} id="recover-pwd-form">
            <h1>Recuperar senha</h1>
            <Input required type="email" id="recover-pwd-input" placeholder="Digite seu endereço de e-mail"/>
            <Button id="recover-pwd-btn" type="submit">Enviar e-mail</Button>
        </form>
    </div>
}