import React, { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [jogo, setJogo] = useState({
    nome: "",
    genero: "",
    plataforma: "",
    ano: "",
    avaliacao: "",
  });

  const handleChange = (e) => {
    setJogo({ ...jogo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost/backend/inserir.php", jogo)
      .then(() => {
        alert("Jogo cadastrado com sucesso!");
        setJogo({ nome: "", genero: "", plataforma: "", ano: "", avaliacao: "" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Cadastro de Jogo</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={jogo.nome} onChange={handleChange} required />
        <input name="genero" placeholder="Gênero" value={jogo.genero} onChange={handleChange} />
        <input name="plataforma" placeholder="Plataforma" value={jogo.plataforma} onChange={handleChange} />
        <input name="ano" placeholder="Ano" type="number" value={jogo.ano} onChange={handleChange} />
        <input name="avaliacao" placeholder="Avaliação" type="number" step="0.1" value={jogo.avaliacao} onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
