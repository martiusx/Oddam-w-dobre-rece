import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";

const HomeHeader = function() {
    return (
        <header className="header">
            <div className="header__img" />
            <div className="header__text">
                <Heading 
                    firstText="Zacznij pomagać!" 
                    secondText="Oddaj niechciane rzeczy w zaufane ręce"
                />
                <div className="header__text-buttons">
                    <Link to="/logowanie">
                        <Button text="Oddaj rzeczy" />
                    </Link>
                    <Link to="/logowanie">
                        <Button text="Zorganizuj zbiórkę" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default HomeHeader;