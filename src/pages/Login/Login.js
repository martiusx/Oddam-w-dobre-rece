import { Link } from "react-router-dom";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";

const Login = function() {
    return (
        <div className="login">
            <Heading firstText="Zaloguj się" />
            <div className="login__panel">
                <div className="login__panel-email">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="login__panel-password">
                    <label>Hasło</label>
                    <input type="password"/>
                </div>
            </div>
            <div className="login__buttons">
                <Link to="/rejestracja"><Button text="Załóż konto" /></Link>
                <Link to="/logowanie"><Button text="Zaloguj się" /></Link>
            </div>
        </div>
    )
}

export default Login;