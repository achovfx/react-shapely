import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import SmallSection from './SmallSection/SmallSection';
import Limitless from './Limitless/Limitless';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';
import "./App.css";

export default function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Home />
      <SmallSection />
      <Limitless />
      <Projects />
      <Team />
      <Clients />
      <Footer />
    </div>
  )
};