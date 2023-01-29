import "./PasswordInput.css";
import { useState } from "react";


export default function PasswordInput(props) {
    const [isVisible, setIsVisible] = useState(false);

    const {placeholder, children, className, type, ...rest} = props;

    const imageSrc = isVisible ? "src/assets/invisible-password-icon.svg" : "src/assets/password-visibility-icon.svg";
    const inputType = isVisible ? "text" : "password";
    const actualPlaceholder = placeholder ? placeholder : "Password";
    return <div className={`password-input-div ${className}`}>
        <input placeholder={actualPlaceholder} type={inputType} className={`password-input`} {...rest}/>
        <img onClick={() => setIsVisible(prev => !prev)} className="toggle-pwd-vision" src={imageSrc}/>
    </div> 
}