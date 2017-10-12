import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
