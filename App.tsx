/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, FlatList, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Formulario from './src/Components/Formulario';
import Paciente from './src/Components/Paciente';
import { pacienteType } from './src/types';



function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [pacientes, setPacientes] = useState<Array<pacienteType>>([])
  const [pacienteEdicion, setPacienteEdicion] = useState<pacienteType>()

  const pacienteEditar = (id: () => number) => {
    const [pacienteFiltered] = pacientes.filter(el => el.id === id)
    setPacienteEdicion(pacienteFiltered)
  }

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

        {
          pacientes.length === 0
            ? (
              <Text style={styles.noPacientes}>No hay pacientes aún</Text>
            )
            : (
              <FlatList
                style={styles.listado}
                data={pacientes}
                keyExtractor={item => `${item.id}`}
                renderItem={(item) => {
                  return (
                    <Paciente
                      item={item}
                      setModalVisible={setModalVisible}
                      pacienteEditar={pacienteEditar}
                    />
                  )
                }}
              />
            )
        }

        <Formulario
          modalVisible={modalVisible}
          setModaVisible={setModalVisible}
          setPacientes={setPacientes}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
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
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  },
});

export default App;
