import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert, Button, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { pacienteType } from '../types'

type Props = {
  cerrarModal: () => void
  modalVisible: boolean
  // setModaVisible: Dispatch<SetStateAction<boolean>>
  setPacientes: Dispatch<SetStateAction<pacienteType[]>>
  pacientes: Array<pacienteType>
  pacienteEdicion: pacienteType | null
  setPacienteEdicion: Dispatch<SetStateAction<pacienteType | null>>
}

const Formulario: React.FC<Props> = ({
  modalVisible,
  // setModaVisible,
  pacientes,
  setPacientes,
  pacienteEdicion,
  setPacienteEdicion,
  cerrarModal,
}) => {

  const [paciente, setPaciente] = useState<string>('')
  const [propietario, setPropietario] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')
  const [fecha, setFecha] = useState<Date>(new Date())
  const [sintomas, setSintomas] = useState<string>('')

  useEffect(() => {
    if (pacienteEdicion && Object.keys(pacienteEdicion ?? {}).length > 0) {
      setPaciente(pacienteEdicion.paciente)
      setPropietario(pacienteEdicion.propietario)
      setEmail(pacienteEdicion.email)
      setTelefono(pacienteEdicion.telefono)
      setFecha(pacienteEdicion.fecha)
      setSintomas(pacienteEdicion.sintomas)
    }
    return ()=>{
      setPacienteEdicion(null)
    }
  }, [pacienteEdicion])



  const handleCita = () => {
    if ([paciente, propietario, email, telefono, sintomas, fecha].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }


    if (pacienteEdicion?.id) {
      const nuevoPaciente: pacienteType = {
        id: pacienteEdicion.id,
        paciente,
        propietario,
        email,
        telefono,
        fecha,
        sintomas
      }
      const pacientesActualizados = pacientes.map(el => el.id === nuevoPaciente.id
        ? nuevoPaciente
        : el)
      setPacientes(pacientesActualizados)
      setPacienteEdicion(null)
    } else {
      const nuevoPaciente: pacienteType = {
        id: Date.now,
        paciente,
        propietario,
        email,
        telefono,
        fecha,
        sintomas
      }
      setPacientes(content => [...content, nuevoPaciente]);
    }


    // setModaVisible(content => !content)
    cerrarModal()
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setSintomas('')

  }


  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text
            style={styles.titulo}
          >
            {pacienteEdicion?.id ? 'Editar' : 'Nueva'} {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => {
              cerrarModal()
              setPaciente('')
              setPropietario('')
              setEmail('')
              setTelefono('')
              setFecha(new Date())
              setSintomas('')          
            }}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Nombre del  Paciente
            </Text>
            <TextInput
              placeholder='Nombre del Paciente'
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
              style={styles.input}
            />
          </View>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Nombre Propietario
            </Text>
            <TextInput
              value={propietario}
              onChangeText={setPropietario}
              placeholder='Nombre Propietario'
              placeholderTextColor={'#666'}
              style={styles.input} />
          </View>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Email Propietario
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder='Email Propietario'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              style={styles.input} />
          </View>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Teléfono Propietario
            </Text>
            <TextInput
              value={telefono}
              onChangeText={setTelefono}
              placeholder='Teléfono Propietario'
              placeholderTextColor={'#666'}
              keyboardType='phone-pad'
              maxLength={10}
              style={styles.input}
            />
          </View>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Síntomas
            </Text>
            <TextInput
              value={sintomas}
              onChangeText={setSintomas}
              placeholder='Síntomas Paciente'
              placeholderTextColor={'#666'}
              style={[styles.input, styles.sintomasInput]}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View style={styles.campo}>
            <Text
              style={styles.label}
            >
              Fecha
            </Text>

            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                onDateChange={setFecha}
                locale='es'
              />
            </View>
          </View>

          <Pressable
            style={styles.btnNuevaCita}
            onPress={handleCita}
          >
            <Text style={styles.btnNuevaCitaTexto}>{pacienteEdicion?.id ? 'Editar' : 'Agregar'} Paciente</Text>
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
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
  btnCancelar: {
    marginTop: 20,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 80,
  },
  fechaContenedor: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default Formulario
