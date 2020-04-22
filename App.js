import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter  from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching/>
    </div>
  );
}

export default App;
