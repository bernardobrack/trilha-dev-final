import LoginForm from "../LoginForm/LoginForm"
import "./LoginPage.css";

export default function LoginPage() {
    return <div id="login-page-div">
        <div id="login-page-imgage-div">
            <img id="login-page-image" src="src\assets\login-image.svg" alt="Pixel Quizzes Logo" />
        </div>
        <LoginForm />
    </div>
}