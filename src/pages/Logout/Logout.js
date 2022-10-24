import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Logout = function() {
    return (
        <>
            <div className="logout">
                <Heading firstText="Wylogowanie nastąpiło" secondText="pomyślnie!" />
                
                <div className="logout__button">
                    <Link to="/"><Button text="Strona główna" /></Link>
                </div>
            </div>
        </>   
    )
}

export default Logout;