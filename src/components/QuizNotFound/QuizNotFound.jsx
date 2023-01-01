import "./QuizNotFound.css";

export default function QuizNotFound() {
    return <div id="quiz-not-found-div">
        <img src="src/assets/cool-kid-standing.svg" alt="girl just standing and looking at her phone" />
        <div id="quiz-not-found-text">
            <h5>Quiz não encontrado</h5>
            <p className="p-medium">Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes.</p>
        </div>
    </div>;
}