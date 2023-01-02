import "./Difficulty.css";

export default function Difficulty(props) {
    
    const { difficulty, ...rest } = props;
    return <div className={`${difficulty} difficulty-container`} {...rest}>
        <p className="p-medium">{difficulty === "easy" ? "FÁCIL" : "DIFÍCIL"}</p>
    </div>
}