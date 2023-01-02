import "./PrevButton.css";

export default function PrevButton(props) {
    const {className, children, ...rest} = props;

    return <div 
    className={`btn-prev ${className}`} 
    {...rest}>
        <img src="/src/assets/go-back-icon.svg" alt="<" />
    </div>
}