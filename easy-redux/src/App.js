import React from 'react';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from './actions/index';

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter Value is {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {
        isLogged ? <p>You are Logged in</p> : ''
      }
    </div>
  );
}

export default App;
