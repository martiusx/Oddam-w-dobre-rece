import { Link } from "react-router-dom";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import sideIcon1 from "../../assets/Icon-1.png";
import sideIcon2 from "../../assets/Icon-2.png";
import sideIcon3 from "../../assets/Icon-3.png";
import sideIcon4 from "../../assets/Icon-4.png";

const HomeThreeColumnsElement = function(props) {
    return (
        <div className="homeThreeColumns__Element">
            <img 
                className="homeThreeColumns__Element-img" 
                src={props.icon} 
                alt={props.iconAlt}
            />
            <h4 className="homeThreeColumns__Element-title">
                {props.title}
            </h4>
            <div className="homeThreeColumns__Element-line"/>
            <p className="homeThreeColumns__Element-text">
                {props.text}
            </p>
        </div>
    )
}

const HomeThreeColumns = function() {
    return (
        <div className="homeThreeColumns" id="homeThreeColumns">
            <Heading firstText={'Wystarczą 4 proste kroki'}/>
            <div className="homeThreeColumns__icons">
                <HomeThreeColumnsElement 
                    icon={sideIcon1} 
                    iconAlt={'ikona-wybierz rzeczy'} 
                    title={'Wybierz rzeczy'} 
                    text={'ubrania, zabawki, sprzęt i inne'}
                />
                <HomeThreeColumnsElement 
                    icon={sideIcon2} 
                    iconAlt={'ikona-spakuj je'} 
                    title={'Spakuj je'} 
                    text={'skorzystaj z worków na śmieci'}
                />
                <HomeThreeColumnsElement 
                    icon={sideIcon3} 
                    iconAlt={'ikona-pomoc'} 
                    title={'Zdecyduj komu chcesz pomóc'} 
                    text={'wybierz zaufane miejsce'}
                />
                <HomeThreeColumnsElement 
                    icon={sideIcon4} 
                    iconAlt={'ikona-zamów kuriera'} 
                    title={'Zamów kuriera'} 
                    text={'kurier przyjedzie w dogodnym terminie'}
                />
            </div>
            <Link to="/logowanie">
                <Button text={'ODDAJ RZECZY'}/>
            </Link>
        </div>
    )
}
export default HomeThreeColumns;