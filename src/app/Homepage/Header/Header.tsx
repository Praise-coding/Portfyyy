import React from 'react';
import NavBar from "@/app/Homepage/Header/NavBar";
import HeroSection from "@/app/Homepage/Header/HeroSection";
import SocialMediaBelt from "@/app/Homepage/SocialMediaBelt";

function Header() {
    return (
        <header >
            <NavBar/>
            <HeroSection/>
            <SocialMediaBelt/>

        </header>
    );
}

export default Header;