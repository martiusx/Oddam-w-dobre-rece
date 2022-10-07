import React from "react";

import Button from "../../reusableComponents/button/Button";

import Heading from "../../reusableComponents/Heading/Heading";

import {
    Link
  } from "react-router-dom";


const HeaderText = function(){
    return(
            <div className="header__text">
                <Heading 
                    firstText={'Zacznij pomagać!'} 
                    secondText={'Oddaj niechciane rzeczy w zaufane ręce'}/>
                <div className="header__text-buttons">
                    <Link to="/logowanie">
                        <Button text={'Oddaj rzeczy'}></Button>
                    </Link>
                    <Link to="/logowanie">
                        <Button text={'Zorganizuj zbiórkę'}></Button>
                    </Link>
                </div>
            </div>
    )
}

export default HeaderText;