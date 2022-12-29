import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import SmallButton from "../SmallButton/SmallButton";
import "./LoginForm.css";
import { useState } from "react";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        "email": "",
        "pwd": ""
    });
    
    function handleFormChange(event) {
        const {name, value} = event.target;
        
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleLoginSubmit() {

    }
    return <div id="login-form-div">
        <h1>Entrar</h1>
        <form id="login-form" onSubmit={handleLoginSubmit}>
            <Input onChange={handleFormChange} name="email" value={formData.email} className="login-form-field" required type="email" placeholder="Email"/>
            <PasswordInput onChange={handleFormChange} name="pwd" value={formData.pwd} className="login-form-field" />
            <SmallButton className="btn-medium">Esqueceu sua senha?</SmallButton>
            <Button type="submit">Entrar</Button>
            <SmallButton className="btn-medium">Criar uma conta</SmallButton>
        </form>
    </div>
}