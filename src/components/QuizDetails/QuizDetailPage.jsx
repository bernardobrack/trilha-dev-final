import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import QuizDetail from "../QuizDetail/QuizDetail";
import SimpleHeader from "../SimpleHeader/SimpleHeader";
import "./QuizDetailPage.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

export default function QuizDetailPage() {
    const { id } = useParams();
    const {data, error, isLoading} = useFetch(`quizzes/${id}`)
    const navigate = useNavigate(); 
    return <>
        <SimpleHeader onPrevClick="/home"/>
        <div id="detail-page-content">
            {!isLoading && <>
                <QuizDetail quizInfo={data}/>
                <Button onClick={() => navigate(`/quiz/${id}`)} className="btn-medium">Fazer tentativa</Button>
            </>}
            {isLoading && <div className="center"><Loader /></div>}
        </div>
    </>
}