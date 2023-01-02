import "./Option.css"

export default function Option(props) {
    const {showType, correct, letter, text, onClick, index, disabled} = props;
    const classes = `${correct ? "correct" : "wrong"} ${disabled ? "disabled" : ""}`;
    return <div onClick={() => onClick(index, correct)} className={`option-div ${showType ? `${classes}` : `${disabled ? "disabled" : ""}`}`}>
        <div className="option-content">
            <p className="p-large">{letter}.</p>
            <p className="p-large">{text}</p>
        </div>
    </div>
}