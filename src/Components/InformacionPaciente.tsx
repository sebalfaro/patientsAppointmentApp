import React, { Dispatch, SetStateAction } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { pacienteType } from '../types'
import { dateFormatter } from '../helpers';

interface Props {
  pacienteEdicion: pacienteType | null;
  setPacienteEdicion: Dispatch<SetStateAction<pacienteType | null>>
  setModalPaciente: Dispatch<SetStateAction<boolean>>;
}

const InformacionPaciente = ({
  pacienteEdicion = {} as pacienteType,
  setModalPaciente,
  setPacienteEdicion
}: Props) => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.titulo}>Información {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View
        style={styles.contenido}
      >
        <View style={styles.campo}>
          <Text style={styles.campo}>Nombre:</Text>
          <Text style={styles.valor}>{pacienteEdicion?.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.campo}>Propietario:</Text>
          <Text style={styles.valor}>{pacienteEdicion?.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.campo}>Email:</Text>
          <Text style={styles.valor}>{pacienteEdicion?.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.campo}>Teléfono:</Text>
          <Text style={styles.valor}>{pacienteEdicion?.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.campo}>Fecha Alta:</Text>
          <Text style={styles.valor}>{pacienteEdicion ? dateFormatter(pacienteEdicion.fecha) : null}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.campo}>Sintomas:</Text>
          <Text style={styles.valor}>{pacienteEdicion?.sintomas}</Text>
        </View>

      </View>

      <Pressable
        onPress={() => {
          setModalPaciente(false)
          setPacienteEdicion(null)
        }}
        style={styles.btnCerrar}
      >
        <Text
          style={styles.btnCerrarTexto}
        >Cerrar</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F593E0B',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
    color: '#FFF'
  },
  tituloBold: {
    fontWeight: '900'
  },
  contenido: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnCerrar: {
    marginTop: 20,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  campo: {
    marginBottom: 10,

  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    marginBottom: 3,
    fontSize: 12,
  },
  valor: {
    fontWeight: "700",
    fontSize: 22,
    color: '#334155'
  }
})

export default InformacionPaciente
