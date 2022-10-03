import React from "react";

import Button from "../../reusableComponents/button/Button";

import Heading from "../../reusableComponents/Heading/Heading";

const HeaderText = function(){
    return(
        <div className="header__text">
            <Heading 
                firstText={'Zacznij pomagać!'} 
                secondText={'Oddaj niechciane rzeczy w zaufane ręce'}/>
            <div className="header__text-buttons">
                <Button text={'Oddaj rzeczy'}></Button>
                <Button text={'Zorganizuj zbiórkę'}></Button>
            </div>
            
        </div>
    )
}

export default HeaderText;