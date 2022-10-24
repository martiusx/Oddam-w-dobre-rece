import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Register = function() {
    return (
        <>
            <div className="register">
                <Heading firstText="Załóż konto" />
                <div className="register__panel">
                    <div className="register__panel-email">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="register__panel-password">
                        <label>Hasło</label>
                        <input type="password"/>
                    </div>
                    <div className="register__panel-password">
                        <label>Powtórz hasło</label>
                        <input type="password"/>
                    </div>
                </div>
                <div className="register__buttons">
                    <Link to="/logowanie"><Button text="Zaloguj się" /></Link>
                    <Link to="/rejestracja"><Button text="Załóż konto" /></Link>
                </div>
            </div>
        </>
    )
}

export default Register;

