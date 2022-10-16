import { Link } from "react-router-dom";

const Nav = function() {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <ul className="nav__account">
                    <li className="nav__account-login">
                        <Link to="/logowanie">Zaloguj</Link>
                    </li>
                    <li className="nav_account-create">
                        <Link to="/rejestracja">Załóż konto</Link>
                    </li>
                </ul>
            </div>
            <div className="nav__wrapper">
                <ul className="nav__section">
                    <li>
                        <a href="/">Start</a>
                    </li>
                    <li>
                        <a href="#mainSide">O co chodzi?</a>
                    </li>
                    <li>
                        <a href="#homeAboutUs">O nas</a>
                    </li>
                    <li>
                        <a href="/">Fundacja i organizacje</a>
                    </li>
                    <li>
                        <a href="/">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;