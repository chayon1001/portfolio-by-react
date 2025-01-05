import React from 'react';
import Banner from '../banner/Banner';
import AboutMe from '../about/AboutMe';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutMe></AboutMe>
         <Skills></Skills>
         <Education></Education>
         <Projects></Projects>
         <Contact></Contact>
        </div>
    );
};

export default Home;