import React from "react";

import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Statistics from "./Statistics/Statistics";
import MainSide from "./MainSide/MainSide";

const Home = ()=>{
    return(
    <>
        <Nav/>
        <Header/>
        <Statistics/>
        <MainSide/>
    </>
        )
}

export default Home;
