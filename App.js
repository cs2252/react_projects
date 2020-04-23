import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter  from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching';
import ComponentE from './components/ComponentE'
import UseReducerCounterOne from './components/UseReducerCounterOne';
export const channelContext=React.createContext()
export const userContext=React.createContext()

function App() {
  return (
    <div className="App">
    {/* <userContext.Provider value={"chandan"}>
      <channelContext.Provider value={"channelName"}>
        <ComponentE />
      </channelContext.Provider>
    </userContext.Provider> */}

    <UseReducerCounterOne/>

    </div>
  );
}

export default App;
