import React from "react";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavAccountLogin = function(){
    return(
        <li className="nav__account-login"><Link to="/logowanie">Zaloguj</Link></li>
    )
}

const NavAccountCreate = function(){
    return(
        <li className="nav_account-create"><Link to="/rejestracja">Załóż konto</Link></li>
        )
}

const NavLogin = function(){
    return(
        <Router>
            <ul className="nav__account">
                <NavAccountLogin/>
                <NavAccountCreate/>
            </ul>
        </Router>
    )
} 

export default NavLogin;
