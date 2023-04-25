import React, { Dispatch, SetStateAction } from 'react'
import { ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native'
import { pacienteType } from '../types'
import { dateFormatter } from '../helpers'

interface Props {
  item: ListRenderItemInfo<pacienteType>,
  setModalVisible: Dispatch<SetStateAction<boolean>>,
  pacienteEditar: (id: () => number) => void
}

const Paciente = ({ item, setModalVisible, pacienteEditar }: Props) => {
  const { item: { paciente, fecha, id } } = item

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{dateFormatter(fecha)}</Text>

      <View style={styles.contenedorBtns}>
        <Pressable
          style={[styles.btn, styles.btnEditar]}
          onLongPress={() => {
            setModalVisible(true)
            pacienteEditar(id)
          }}
        >
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminarr</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomColor: "#94a3B8",
    borderBottomWidth: 1
  },
  label: {
    color: "#374151",
    textTransform: 'uppercase',
    fontWeight: "700",
    marginBottom: 10
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10
  },
  fecha: {
    color: "#374151",
  },
  contenedorBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444'
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 12,
    color: '#FFF'
  }
})

export default Paciente
