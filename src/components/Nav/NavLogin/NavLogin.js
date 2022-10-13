import { Link } from "react-router-dom";

const NavLogin = () => {
    return (
            <ul className="nav__account">
                <li className="nav__account-login">
                    <Link to="/logowanie">Zaloguj</Link>
                </li>
                <li className="nav_account-create">
                    <Link to="/rejestracja">Załóż konto</Link>
                </li>
            </ul>
    )
} 

export default NavLogin;
