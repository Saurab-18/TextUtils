import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { Router, Routes } from 'react-router-dom';
// import { Route } from 'router';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode , setMode] =useState("light")
  const [alert , setAlert]=useState("null")

  const showAlert = (message,type) =>{
   setAlert({ 
    msg: message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
  }

 const toggleMode = () =>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor ="#042743"
    showAlert("Dark mod has been enabled","sucess")
    document.title="TextUtils - Dark Mode"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor ="white"
    showAlert("light mod has been enabled","sucess")
    document.title="TextUtils - light Mode"
  }

}

  return (   
  <>
    {/* <Router> */}
     <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
       {/* <Routes> */}
         {/* <Route path ="/about" element={ <About/>}/> */}
         {/* <Route path ="/" element={}/> */}
         <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
       {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
