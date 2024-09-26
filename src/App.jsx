import React from 'react';
import Header from './components/Header';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import BackgroundVideo from './components/BackgroundVideo'; // Import the BackgroundVideo component

function App() {
  return (
    <div className="App">
      <BackgroundVideo /> {/* Add BackgroundVideo component here */}
      <Header />
      <ProfileSummary />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
