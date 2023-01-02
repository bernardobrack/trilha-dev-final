import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import SimpleHeader from "../SimpleHeader/SimpleHeader";

export default function QuizPage(props) {
    const { id, n } = useParams();
    const { data, isLoading } = useFetch(`questions/${id}`);
    return <>
        <SimpleHeader onPrevClick={`/details/${id}`}/>
        {!isLoading && <Outlet context={{data: data, n: n}}/>}
    </>
}