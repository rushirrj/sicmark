
import React,{useState} from 'react';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

function App() {
  const [res,setRes]= useState([])
  return (
    <div className="App">
      <Screen1 res={res} setRes={setRes}/>
      <Screen2 res={res} setRes={setRes}/>
    </div>
  );
}

export default App;
