import Heading from "../../components/ui/Heading";

const HomeAboutUs = function() {
    return (
        <div className="homeAboutUs" id="homeAboutUs">
            <div className="homeAboutUs__text">
                <Heading firstText="O nas" />
                <p>
                    Nori grape silver beet broccoli kombu beet greens 
                    fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek lentil 
                    turnip greens parsnip.
                </p>
                <div className="homeAboutUs__text-signature" />
            </div>
            <div className="homeAboutUs__img" />
        </div>
    )
}

export default HomeAboutUs;