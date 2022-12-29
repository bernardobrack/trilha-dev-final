import "./Input.css";

export default function Input(props) {
    const {className, children, ...rest} = props;

    return <input className={`text-input ${className}`} {...rest}/>
}