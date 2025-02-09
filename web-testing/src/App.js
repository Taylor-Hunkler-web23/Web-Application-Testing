import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'

// export const strikeCounter = (strike, setStrike, setBall) => {
//   if (strike < 3) {
//      return setStrike(strike + 1)
//   } else {
//       setStrike(0) || setBall(0)
//   }
// }

function App() {

  const [ball, setBall] = useState(0)
  const [strike, setStrike] = useState(0)
  const [foul, setFoul] = useState(0)


  return (
    <div className="App">
      <h1>Scoreboard</h1>
      <Display  ball={ball} strike={strike}/>
      <Dashboard ball={ball} setBall={setBall} strike={strike} setStrike={setStrike} foul={foul} setFoul={setFoul}  />
    </div>
  );
}

export default App;
