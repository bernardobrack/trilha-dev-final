import "./QuizCard.css";
import Difficulty from "../Difficulty/Difficulty";
import QuizHistory from "../QuizHistory/QuizHistory";

export default function QuizCard(props) {
    
    const {quizInfo, history} = props;
    
    return <div className="quiz-card-div">
        <div 
            className="quiz-card-image" 
            style={{backgroundImage: `url(${quizInfo.banner_image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                {!history && <Difficulty difficulty={quizInfo.difficulty} />}
        </div>
        <div className="quiz-info-div">
            {history && <QuizHistory date={quizInfo.date} certas={quizInfo.correct_answers_count} total={quizInfo.questions_count}/>}
            <h4>{quizInfo.title}</h4>
            <p className="p-medium">{quizInfo.short_description}</p>
        </div>
    </div>
}