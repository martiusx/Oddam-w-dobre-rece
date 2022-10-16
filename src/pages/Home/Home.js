import Nav from "./HomeNav";
import HomeHeader from "./HomeHeader";
import Statistics from "./HomeStatistics";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";

const Home = function() {
    return (
        <>
            <Nav/>
            <HomeHeader/>
            <Statistics/>
            <HomeThreeColumns/>
            <HomeAboutUs/>
        </>
    )
}
export default Home;
