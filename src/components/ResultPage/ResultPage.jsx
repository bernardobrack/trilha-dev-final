import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./ResultPage.css";
import Button from "../Button/Button";

export default function ResultPage() {
    const [searchParams,] = useSearchParams();
    const { id } = useParams();
    const navigate = useNavigate();
    const correct = searchParams.get("correct");
    const total = searchParams.get("total");
    const description = correct === total ? "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!" : "Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!";
   const text = correct === total ? "Você é um mestre" : "Quase lá...";
   return <div className="results-div">
        <h4>Resultados</h4>
        <div className="results-info">
            <div className="results-score">
                <h1>{correct}/{total}</h1>
            </div>
            <div className="results-text">
                <h4>{text}</h4>
                <p className="p-large">{description}</p>
            </div>
        </div>
        <Button onClick={() => navigate(`/details/${id}`)} className="btn-medium" id="result-btn">Finalizar</Button>
    </div>
}