import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000) 
  }

  const toggleMode = () => {
    if (mode === 'light') { 
      setMode('dark'); 
      document.body.style.backgroundColor = '#272b2e';
    }
    else { 
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
