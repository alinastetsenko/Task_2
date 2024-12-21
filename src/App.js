import React from 'react';
import './App.css';
import logo from './img/logo.svg';
import inst from './img/inst.svg';
import linked from './img/linked.svg';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
      <div className="App">
        <div className="wrapper">
         <Header/>
        <Main/>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
