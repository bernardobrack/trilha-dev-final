import "./PasswordInput.css";

export default function PasswordInput(props) {
    const {placeholder, children, className, type, ...rest} = props;

    const actualPlaceholder = placeholder ? placeholder : "Password";
    return <div className="password-input-div">
        <input placeholder={actualPlaceholder} type="password" className={`password-input ${className}`} {...rest}/>
        <p className="toggle-pwd-vision">oi</p>
    </div> 
}