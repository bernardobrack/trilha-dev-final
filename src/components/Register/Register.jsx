import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import SmallButton from "../SmallButton/SmallButton";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        navigate("/");
    }

    return <div id="register-page-div">
        <h1>Cadastre-se</h1>
        <p className="p-large">Crie uma conta gratuitamente</p>
        <form id="register-page-form" onSubmit={handleFormSubmit}>
            <Input required className="register-input" placeholder="Nome" />
            <Input required className="register-input" placeholder="E-mail" type="email"/>
            <PasswordInput required />
            <Button type="submit">Cadastre-se</Button>
            <SmallButton onClick={() => navigate("/")}className="btn-medium">Entrar</SmallButton>
        </form>
    </div>
}