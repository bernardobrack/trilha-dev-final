import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import SimpleHeader from "../SimpleHeader/SimpleHeader";

export default function QuizPage() {
    const { id, n } = useParams();
    const { data, isLoading } = useFetch(`questions/${id}`);
    return <>
        <SimpleHeader onPrevClick={`/details/${id}`}/>
        {isLoading ? <Loader className="center"/> : <Outlet context={{questions: data, n: n}}/>}
    </>
}