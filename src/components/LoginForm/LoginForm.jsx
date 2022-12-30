import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import SmallButton from "../SmallButton/SmallButton";
import "./LoginForm.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider/AppProvider";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        "email": "",
        "pwd": ""
    });
    
    const navigate = useNavigate();
    const {user, setUser} = useContext(AppContext);
    function handleFormChange(event) {
        const {name, value} = event.target;
        
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleLoginSubmit(event) {
        event.preventDefault();
        setUser({
            email: formData.email
        });
        navigate("/home");
    }
    return <div id="login-form-div">
        <h1>Entrar</h1>
        <form id="login-form" onSubmit={handleLoginSubmit}>
            <Input onChange={handleFormChange} name="email" value={formData.email} className="login-form-field" required type="email" placeholder="Email"/>
            <PasswordInput required onChange={handleFormChange} name="pwd" value={formData.pwd} className="login-form-field" />
            <SmallButton onClick={() => navigate("/recover-password")} className="btn-medium">Esqueceu sua senha?</SmallButton>
            <Button type="submit">Entrar</Button>
            <SmallButton onClick={() => navigate("/register")} className="btn-medium">Criar uma conta</SmallButton>
        </form>
    </div>
}