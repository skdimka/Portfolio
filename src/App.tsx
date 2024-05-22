import React from 'react';
import Header from './components/Header';
import SectionHome from './components/Home';
import Project from './components/BeatyWorld';
import TechStack from './components/TechStack';
import SmartHome from './components/SmartHome';

function App() {
  return (
    <div className="App">
      <div className="home">
        <Header />
        <SectionHome />
        <TechStack />
      </div>
      <SmartHome />
      <Project />
    </div>
  );
}

export default App;
