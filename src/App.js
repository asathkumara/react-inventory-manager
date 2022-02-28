import './styles/main.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Zones from "./components/pages/Zones";
import SearchFood from "./components/pages/SearchFood";
import RegisterFood from "./components/pages/RegisterFood";
import AddZone from "./components/pages/AddZone";
import EditZone from "./components/pages/EditZone";
import ManageFood from "./components/pages/ManageFood";
import Error from "./components/pages/Error";
import Groceries from "./components/pages/Groceries";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/zones" element={<Zones/>}/>
            <Route path="/dashboard/zones/add" element={<AddZone/>}/>
            <Route path="/dashboard/zones/edit/:zoneID" element={<EditZone/>}/>
        <Route path="/dashboard/food/register" element={<RegisterFood/>}/>
        <Route path="/dashboard/food/manage/:foodID" element={<ManageFood/>}/>
        <Route path="/dashboard/search" element={<SearchFood/>}/>
        <Route path="/dashboard/groceries" element={<Groceries/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
