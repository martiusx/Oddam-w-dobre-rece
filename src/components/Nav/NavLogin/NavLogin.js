import React from "react";

const NavLogin = function(){
    return(
        <ul className="nav__account">
            <li className="nav__account-login"><a href="/">Zaloguj</a></li>
            <li className="nav_account-create"><a href="/">Załóż konto</a></li>
        </ul>
    )
} 

export default NavLogin;