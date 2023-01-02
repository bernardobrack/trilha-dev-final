import "./Option.css"

export default function Option(props) {
    const {showType, correct, letter, text, onClick, index} = props;
    console.log(props);
    const classes = correct ? "correct" : "wrong";
    return <div onClick={() => onClick(index)} className={`option-div ${showType ? `${classes}` : ""}`}>
        <div className="option-content">
            <p className="p-large">{letter}.</p>
            <p className="p-large">{text}</p>
        </div>
    </div>
}