import { Link } from "react-router-dom";
import Button from "../../reusableComponents/button/Button";
import Heading from "../../reusableComponents/Heading/Heading";

const HeaderText = function() {
    return (
        <div className="header__text">
            <Heading 
                firstText="Zacznij pomagać!" 
                secondText="Oddaj niechciane rzeczy w zaufane ręce"
            />
            <div className="header__text-buttons">
                <Link to="/logowanie">
                    <Button text='Oddaj rzeczy' />
                </Link>
                <Link to="/logowanie">
                    <Button text={'Zorganizuj zbiórkę'} />
                </Link>
            </div>
        </div>
    )
}

export default HeaderText;