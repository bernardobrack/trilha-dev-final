import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import QuizDetail from "../QuizDetail/QuizDetail";
import SimpleHeader from "../SimpleHeader/SimpleHeader";
import "./QuizDetailPage.css";
import Button from "../Button/Button";

export default function QuizDetailPage() {
    const { id } = useParams();
    const {data, error, isLoading} = useFetch(`quizzes/${id}`) 
    return <>
        <SimpleHeader onPrevClick="/home"/>
        <div id="detail-page-content">
            {!isLoading && <>
                <QuizDetail quizInfo={data}/>
                <Button className="btn-medium">Fazer tentativa</Button>
            </>}
        </div>
    </>
}