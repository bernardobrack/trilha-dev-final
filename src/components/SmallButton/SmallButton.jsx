import "./SmallButton.css";
import "../Button/Button.css";

export default function SmallButton(props) {
    const {className, children, ...rest} = props;

    return <div  
    className={`btn-small ${className}`} 
    {...rest}>{children}</div>
}