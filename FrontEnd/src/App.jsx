//Importação do react router dom
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Importando pages

import { Login } from "./pages/Login";
import { Register } from "./pages/RegisterProduct";
import { Donation } from "./pages/Donation";
import { CollectionPoint } from "./pages/CollectionPoint";
import { Initial } from "./pages/Initial";

//Importando componentes

import {NavBar} from "../src/components/Navbar";



import './App.css'

function App() {

  return (
    <div style={{paddingTop: '3px', flex: '1'}}>

    
    <BrowserRouter>
    <NavBar />
      <Routes>
       
        <Route path="/" element={<Initial/>} />
        <Route path="/Auth" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/CollectionPoint" element={<CollectionPoint />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
