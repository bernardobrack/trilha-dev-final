import Button from "../Button/Button";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    
    return <div id="page-not-found-div">
        <h1>Page Not Found</h1>
        <Button onClick={() => navigate("/")}>Go Back</Button>
    </div>
}