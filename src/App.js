import React from 'react';
import logo from './good kerm.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>jonah is very cool</code> 
        </p>go click on that link it is epic<p></p>
        <a
          className="App-link"
          href="https://robsgameshack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
         
          Robs Game Shack
        </a>
      </header>
    </div>
  );
}

export default App;
