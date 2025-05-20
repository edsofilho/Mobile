import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { TextInput } from "react-native-web";

export default function Cadastro() {
  
  const [nome,setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [ano, setAno] = useState('');
  const [avaliacao, setAvaliacao] = useState('');

  const handleChange = (e) => {
    setJogo({ ...jogo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/backend/inserir.php", jogo)
      .then(() => {
        alert("Jogo cadastrado com sucesso!");
        setJogo({
          nome: "",
          genero: "",
          plataforma: "",
          ano: "",
          avaliacao: "",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de Jogo</Text>
      <View>
        <TextInput
          style={style.input}
          placeholder="Nome do jogo"
          value={senha}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />
        <TextInput
          style={style.input}
          placeholder="Gênero"
          value={genero}
          onChangeText={setGenero}
          placeholderTextColor="#999"
        />
        <TextInput
          style={style.input}
          placeholder="Plataforma"
          value={plataforma}
          onChangeText={setPlataforma}
          placeholderTextColor="#999"
        />
        <TextInput
          style={style.input}
          placeholder="Ano"
          value={ano}
          onChangeText={setAno}
          placeholderTextColor="#999"
        />
        <TextInput
          style={style.input}
          placeholder="Avaliação"
          value={avaliacao}
          onChangeText={setAvaliacao}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={Cadastro}>Cadastrar</TouchableOpacity>
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
});
