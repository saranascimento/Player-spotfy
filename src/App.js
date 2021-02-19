import React from 'react';
// import './App.css';
import {  GlobalStorage } from './GlobalContext';
import GlobalStyle  from './GlobalStyle.js';
import CardHeader from './components/cardHeader/CardHeader';
import CardBody from './components/cardBody/CardBody';


function App() {

  return (
    <GlobalStorage>
      <GlobalStyle />
      <section className="player">
          <div className="card">
            <CardHeader />
            <CardBody />
          </div>
      </section>
    </GlobalStorage>
  );
}

export default App;
