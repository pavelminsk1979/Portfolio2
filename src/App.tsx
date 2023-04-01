import React from 'react';
import './App.css';
import {Header} from "./x10-header/Header";
import {Main} from "./z2-main/Main";
import {Skils} from "./z3-skils/Skils";
import {Projects} from "./z4-projects/Projects";
import {Contact} from "./z5-myContact/Contact";
import {Footer} from "./z6-footer/Footer";



function App() {

  return (
    <div className="App">
    <Header/>
      <Main/>
      <Skils/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
