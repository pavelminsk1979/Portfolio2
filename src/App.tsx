import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skils} from "./skils/Skils";
import {WorkExampl} from "./workExampl/WorkExampl";
import {Contact} from "./myContact/Contact";
import {Footer} from "./footer/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
      <Main/>
      <Skils/>
      <WorkExampl/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
