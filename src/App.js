import './styles/main.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Zones from "./components/pages/Zones";
import SearchFood from "./components/pages/SearchFood";
import RegisterFood from "./components/pages/RegisterFood";
import AddZone from "./components/pages/AddZone";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/zones" element={<Zones/>}/>
            <Route path="/dashboard/zones/add" element={<AddZone/>}/>
        <Route path="/dashboard/register" element={<RegisterFood/>}/>
        <Route path="/dashboard/search" element={<SearchFood/>}/>
      </Routes>
    </div>
  );
}

export default App;
