import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";
import HomeFooter from "../HomeFooter";

const HomeContact = function() {
    return (
        <div className="homeContact">
            <div className="homeContact__img"></div>
            <div className="homeContact__text">
                <Heading firstText="Skontaktuj się z nami"/>
                <form className="homeContact__text-form">
                    <div className="homeContact__text-wrapper">
                        <div className="homeContact__text-name">
                            <label>Wpisz swoje imię</label>
                            <input name="user_name"/>
                        </div>
                        <div className="homeContact__text-email">
                         <label>Wpisz swój email</label>
                            <input name="email" />
                        </div>
                    </div>
                    <div className="homeContact__text-message">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea name="user_name"/>
                    </div>
                    <div className="homeContact__text-button">
                        <Button text="wyślij"/>
                    </div>
                </form>
            </div>
            <HomeFooter/>
        </div>
    )
}

export default HomeContact;