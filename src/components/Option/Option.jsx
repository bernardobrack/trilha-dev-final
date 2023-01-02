import "./Option.css"

export default function Option(props) {
    const {type, letter, text} = props;
    
    return <div className={`option-div ${type}`}>
        <div className="option-content">
            <p className="p-large">{letter}.</p>
            <p className="p-large">{text}</p>
        </div>
    </div>
}