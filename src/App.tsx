import React from 'react';
import Header from './components/Header';
import SectionHome from './components/Home';
import TechStack from './components/TechStack';
import SmartHome from './components/SmartHome';
import About from './components/About';
import Footer from './components/Footer';
import BeatyWorld from './components/BeautyWorld';

function App() {
  return (
    <div className="App">
      <div className="home" id="home">
        <Header />
        <SectionHome />
        <TechStack />
      </div>
      <About />
      <div className="projects" id="project">
        <SmartHome />
        <BeatyWorld />
      </div>
      <Footer />
    </div>
  );
}

export default App;
