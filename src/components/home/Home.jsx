import React from 'react';
import Banner from '../banner/Banner';
import AboutMe from '../about/AboutMe';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Projects from '../projects/Projects';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutMe></AboutMe>
         <Skills></Skills>
         <Education></Education>
         <Projects></Projects>
        </div>
    );
};

export default Home;