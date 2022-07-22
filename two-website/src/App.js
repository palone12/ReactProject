import React from "react";
import NavBar from "./Navbar";
import FooTer from "./Footer"
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";

const App =() =>{
    return(
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <FooTer/>
        </div>
    )
}
export default App;