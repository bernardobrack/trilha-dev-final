import "./PrevButton.css";

export default function PrevButton(props) {
    const {className, children, ...rest} = props;

    return <div 
    className={`btn-prev ${className}`} 
    {...rest}>{"<"}</div>
}