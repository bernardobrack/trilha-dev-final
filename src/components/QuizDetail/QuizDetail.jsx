import "../QuizCard/QuizCard.css";
import "./QuizDetail.css";
import Difficulty from "../Difficulty/Difficulty";

export default function QuizDetail(props) {
    const { quizInfo, children } = props;
    console.log(quizInfo)
    return <div className="quiz-detail-div">
        <h2>{quizInfo.title}</h2>
        <div id="detail-image-div">
                <img id="detail-image" src={quizInfo.banner_image} alt="quiz image" />
                <Difficulty id="detail-difficulty" difficulty={quizInfo.difficulty} />
        </div>
        <section className="about-quiz">
            <h5>Sobre o quiz</h5>
            <p className="p-medium">{quizInfo.description}</p>
        </section>
        <section className="questions-amount">
            <h5>Quantidade de perguntas</h5>
            <p className="p-medium">{quizInfo.questions_count}</p>
        </section>

    </div>
}