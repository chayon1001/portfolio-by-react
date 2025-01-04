import React from 'react';
import Banner from '../banner/Banner';
import AboutMe from '../about/AboutMe';
import Skills from '../skills/Skills';
import Education from '../education/Education';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutMe></AboutMe>
         <Skills></Skills>
         <Education></Education>
        </div>
    );
};

export default Home;