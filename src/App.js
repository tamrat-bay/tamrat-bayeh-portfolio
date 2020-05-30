import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skillset from './components/Skillset/Skillset';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {Container} from '@material-ui/core'
import './App.css';



function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Header />

        <Container maxWidth="lg">
          <About />
          <Skillset />
          <Projects />
          <Contact />
        </Container>
        <Footer />

    </div>
  );
}

export default App;
