import React, { useState } from 'react';
import './App.css';

function App() {
  let [input] = useState(<input type="text"/>);
  let [input_wrap] = useState(
  <ul className="input_wrap">
    <li>{ input }</li>
    <li>{ input }</li>
    <li>{ input }</li>
    <li>{ input }</li>
    <li>{ input }</li>
  </ul>);

  return (
    <div className="App">
      <header className="header">

      </header>
      <main className="main">
        <div className="container">
          <ul>
            <li>{ input_wrap }</li>
            <li>{ input_wrap }</li>
            <li>{ input_wrap }</li>
            <li>{ input_wrap }</li>
            <li>{ input_wrap }</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
