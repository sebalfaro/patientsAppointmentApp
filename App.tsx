/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Formulario from './src/Components/Formulario';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Administrador de Citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>

        <Pressable
          onPress={() => {
            setModalVisible(current => !current);
          }}
          style={styles.btnNuevaCita}
        >
          <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
        </Pressable>

        <Formulario modalVisible={modalVisible} setModaVisible={setModalVisible}/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default App;
