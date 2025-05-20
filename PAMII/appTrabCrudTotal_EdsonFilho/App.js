import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Cadastro from "./src/telas/Cadastro";
import Lista from "./src/telas/Lista";

const handleJogos = () => {
  navigation.replace("Lista");
}
const handleCadastro = () => {
  navigation.replace("Cadastro")
}

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Jogos</Text>
      <View>
        <TouchableOpacity onPress={handleJogos}>Lista de jogos</TouchableOpacity> |{" "}
        <TouchableOpacity onPress={handleCadastro}>Cadastrar Novo Jogo</TouchableOpacity>
      </View>

      <NavigationContainer>
        <MediaStreamTrack.Navigator  />
        <Route path="/cadastro" element={<Cadastro />} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
   flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30
},
titulo:{
  color: '#fafa' 
}
});
