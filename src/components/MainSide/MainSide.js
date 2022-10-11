import MainSideElement from "./MainSideElement/MainSideElement";
import Heading from "../reusableComponents/Heading/Heading";
import Button from "../reusableComponents/button/Button";

import sideIcon1 from '../../assets/Icon-1.png';
import sideIcon2 from '../../assets/Icon-2.png';
import sideIcon3 from '../../assets/Icon-3.png';
import sideIcon4 from '../../assets/Icon-4.png';

const MainSide = function(){
    return(
        <div className="mainSide">
            <Heading firstText={'Wystarczą 4 proste kroki'}/>
            <div className="mainSide__icons">
                <MainSideElement 
                    icon={sideIcon1} 
                    iconAlt={'ikona-wybierz rzeczy'} 
                    title={'Wybierz rzeczy'} 
                    text={'ubrania, zabawki, sprzęt i inne'}
                />
                <MainSideElement 
                    icon={sideIcon2} 
                    iconAlt={'ikona-spakuj je'} 
                    title={'Spakuj je'} 
                    text={'skorzystaj z worków na śmieci'}
                />
                <MainSideElement 
                    icon={sideIcon3} 
                    iconAlt={'ikona-pomoc'} 
                    title={'Zdecyduj komu chcesz pomóc'} 
                    text={'wybierz zaufane miejsce'}
                />
                <MainSideElement 
                    icon={sideIcon4} 
                    iconAlt={'ikona-zamów kuriera'} 
                    title={'Zamów kuriera'} 
                    text={'kurier przyjedzie w dogodnym terminie'}
                />
            </div>
            <Button text={'ODDAJ RZECZY'}/>
        </div>
    )
}

export default MainSide;