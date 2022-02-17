import './styles/main.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
