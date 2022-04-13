import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/landing';
import About from './components/about';
import Projects from './components/project';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Footer />    
    </div>
  );
}

export default App;
