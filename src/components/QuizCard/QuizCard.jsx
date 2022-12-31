import "./QuizCard.css";

export default function QuizCard(props) {
    
    const {quizInfo} = props;
    
    return <div className="quiz-card-div">
        <div 
            className="quiz-card-image" 
            style={{backgroundImage: `url(${quizInfo.banner_image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        </div>
        <div className="quiz-info-div">
            <h4>{quizInfo.title}</h4>
            <p className="p-medium">{quizInfo.short_description}</p>
        </div>
    </div>
}