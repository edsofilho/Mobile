import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./src/Cadastro";
import Lista from "./src/Lista";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Cadastro de Jogos</h1>
        <nav>
          <Link to="/">Lista de Jogos</Link> |{" "}
          <Link to="/cadastro">Cadastrar Novo Jogo</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
