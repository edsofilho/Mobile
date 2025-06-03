import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [ano, setAno] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  const handleSubmit = () => {
    const jogo = { nome, genero, plataforma, ano, avaliacao };

    axios
    .post("https://localhost/beckend/inserir.php", jogo)
    .then(() => {
      alert("Jogo cadastrado com sucesso!");
      setNome("");
      setGenero("");
      setPlataforma("");
      setAno("");
      setAvaliacao("");
    })
    .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de Jogo</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nome do jogo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero"
          value={genero}
          onChangeText={setGenero}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Plataforma"
          value={plataforma}
          onChangeText={setPlataforma}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Ano"
          value={ano}
          onChangeText={setAno}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Avaliação"
          value={avaliacao}
          onChangeText={setAvaliacao}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={handleSubmit}>Cadastrar</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
