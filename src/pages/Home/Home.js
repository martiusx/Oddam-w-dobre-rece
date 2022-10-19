import Nav from "./HomeNav";
import HomeHeader from "./HomeHeader";
import HomeStatistics from "./HomeStatistics";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./HomeHelp";

const Home = function() {
    return (
        <>
            <Nav/>
            <HomeHeader/>
            <HomeStatistics/>
            <HomeThreeColumns/>
            <HomeAboutUs/>
            <HomeHelp/>
        </>
    )
}
export default Home;
