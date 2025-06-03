import React, { useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native-web";

function Lista() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    buscarJogos();
  }, []);

  const buscarJogos = () => {
    axios.get("http://localhost/backend/listar.php")
      .then((res) => setJogos(res.data))
      .catch((err) => console.error(err));
  };

  const excluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      axios.post("http://localhost/backend/excluir.php", { id })
        .then(() => buscarJogos());
    }
  };

  return (
    <View>
      <h2>Lista de Jogos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Plataforma</th>
            <th>Ano</th>
            <th>Avaliação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((jogo) => (
            <tr key={jogo.id}>
              <td>{jogo.nome}</td>
              <td>{jogo.genero}</td>
              <td>{jogo.plataforma}</td>
              <td>{jogo.ano}</td>
              <td>{jogo.avaliacao}</td>
              <td>
                <button onClick={() => excluir(jogo.id)}>Excluir</button>
                {/* Aqui poderia ter um botão de alterar também */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </View>
  );
}

export default Lista;
