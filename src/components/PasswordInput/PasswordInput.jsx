import "./PasswordInput.css";
import { useState } from "react";


export default function PasswordInput(props) {
    const [isVisible, setIsVisible] = useState(false);

    const {placeholder, children, className, type, ...rest} = props;

    const inputType = isVisible ? "text" : "password";
    const actualPlaceholder = placeholder ? placeholder : "Password";
    return <div className="password-input-div">
        <input placeholder={actualPlaceholder} type={inputType} className={`password-input ${className}`} {...rest}/>
        <img onClick={() => setIsVisible(prev => !prev)} className="toggle-pwd-vision" src="src\assets\password-visibility-icon.svg"/>
    </div> 
}