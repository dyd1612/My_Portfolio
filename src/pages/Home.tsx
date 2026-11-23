
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import DevWorkflow from '../components/DevWorkflow';
import WhyHireMe from '../components/WhyHireMe';

import ActivityGraph from '../components/ActivityGraph';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <About />
            <Skills />
            <ActivityGraph />
            <DevWorkflow />
            <Experience />
            <Education />
            <WhyHireMe />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
