import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'

function App() {

  const [ball, setBall] = useState()
  const [strike, setStrike] = useState()
  const [foul, setFoul] = useState()

  return (
    <div className="App">
      <h1>Scoreboard</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
