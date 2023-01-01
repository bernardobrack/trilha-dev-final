import "./Difficulty.css";

export default function Difficulty(props) {
    
    const { difficulty } = props;
    return <div className={`${difficulty} difficulty-container`}>
        <p className="p-medium">{difficulty === "easy" ? "FÁCIL" : "DIFÍCIL"}</p>
    </div>
}