import logo from './logo.svg';
import './App.css';
import {Button, Switch} from "@chakra-ui/react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import {Usuarios} from "./components/Usuarios";
import {Aprendiendo} from "./views/Aprendiendo";

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/login'); // Reemplaza '/ruta-deseada' con tu ruta
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aprendiendo" element={<Aprendiendo/>} />
      </Routes>
    </div>
  );
}

export default App;
