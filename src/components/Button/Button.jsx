import "./Button.css";

export default function Button(props) {
    const {className, children, ...rest} = props;
    
    return <button 
                className={`btn ${className}`} 
                {...rest}>{children}</button>
}