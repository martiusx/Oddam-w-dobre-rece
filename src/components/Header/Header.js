import React from "react";
import HeaderText from "./HeaderText/HeaderText";
import HeaderImg from "./HeaderImg/HeaderImg";

const Header = function(){
    return(
        <header className="header">
            <HeaderImg></HeaderImg>
            <HeaderText></HeaderText>
        </header>
    )
}

export default Header;
