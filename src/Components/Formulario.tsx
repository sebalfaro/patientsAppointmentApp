import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

type Props = {
  modalVisible: boolean
  setModaVisible: Dispatch<SetStateAction<boolean>>
}

const Formulario: React.FC<Props> = ({ modalVisible, setModaVisible }) => {

  const [paciente, setPaciente] = useState<string>('')
  const [propietario, setPropietario] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')
  const [sintomas, setSintomas] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())

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
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

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
              Síntomas
            </Text>
          </View>

          <Button
            title='Presiona aquí'
            onPress={() => setModaVisible(current => !current)}
          ></Button>
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
  }
})

export default Formulario
