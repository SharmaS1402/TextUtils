import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  function toggleMode(){
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
    <TextForm heading = "Enter Text to analyze" mode = {mode}/>
    </div>
    {/* <About/> */}
    </>
  );
}


export default App;
