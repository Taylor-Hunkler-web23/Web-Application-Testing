import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import {render} from "@testing-library/react"
import Dashboard, {addOne} from './components/Dashboard.js'


test ('App renders without crashing', () => {
  render(<App/>);
})

test ('Scoreboard header found', ()=> {
  const {getByText} = render (<App/>);

  getByText(/Scoreboard/i)
})

test ('Dashboard render without crashing', () => {
  render(<Dashboard/>)
})

test ('addOne adds 1 to strike', () => {
  let actual;
  let expected;
  actual = addOne(1);
  expected = 2;
  expect (actual).toBe(expected);
})

test ('Strike button text found', ()=> {
  const {getByText} =render (<Dashboard/>);

  getByText(/strike/i)
})