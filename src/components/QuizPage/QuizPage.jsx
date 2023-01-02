import { useNavigate, useParams } from "react-router-dom";
import SimpleHeader from "../SimpleHeader/SimpleHeader";

export default function QuizPage(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    
    return <>
        <SimpleHeader onPrevClick={`/details/${id}`}/>
    </>
}