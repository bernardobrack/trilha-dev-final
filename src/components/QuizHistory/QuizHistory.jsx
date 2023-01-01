import "./QuizHistory.css";

export default function QuizHistory(props) {
    const {date, certas, total} = props;
    const dateArray = date.split(" ")[0].split('-');
    return <div className="quiz-history">
        <p className="p-small quiz-history-score" style={{color: "#5BA092"}}>Você acertou {certas} de {total}</p>
        <p className="p-small quiz-history-date">Em {`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`}</p>
    </div>
}