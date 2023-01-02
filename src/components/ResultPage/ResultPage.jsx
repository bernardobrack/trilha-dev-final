import { useSearchParams } from "react-router-dom";
import "./ResultPage.css";

export default function ResultPage() {
    const [params,] = useSearchParams();
    return <p>{params?.get("correct")} / {params?.get("total")}</p>;
}