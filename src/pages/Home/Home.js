import Nav from "./HomeNav";
import HomeHeader from "./HomeHeader";
import Statistics from "./HomeStatistics";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = function() {
    return (
        <>
            <Nav/>
            <HomeHeader/>
            <Statistics/>
            <HomeThreeColumns/>
        </>
    )
}
export default Home;
