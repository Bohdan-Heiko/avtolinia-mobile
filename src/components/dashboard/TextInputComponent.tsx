import { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native"
import DatePicker from 'react-native-datepicker'

export const TextInputComponent: React.FC = () => {

  const [orderCar, setOrderCar] = useState({
    number: "",
    phone: "",
    date: "",
    name: "",
    vin: "",
    description: ""
  })

  const updateForm = (text: string, name: string) => {
    setOrderCar({
      ...orderCar,
      [name]: text
    })
  }
  const formateDate = (val: string) => {
    const newVal = val.slice(0, 16)
    setOrderCar({...orderCar, date: newVal})
  }

  return (
    <>
      <Text style={styles.text}>Записать машину</Text>
      <TextInput
        style={styles.input}
        placeholder="Номер машины"
        value={orderCar.number}
        maxLength={4}
        keyboardType="numeric"
        onChangeText={(val) => updateForm(val, 'number')}
      />

      <TextInput
        style={styles.input}
        placeholder="Телефон клиента"
        value={orderCar.phone}
        keyboardType="numeric"
        onChangeText={(val) => updateForm(val, 'phone')}
      />

      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={orderCar.name}
        onChangeText={(val) => updateForm(val, 'name')}
      />

      <TextInput
        style={styles.input}
        placeholder="Vin сode"
        value={orderCar.vin}
        onChangeText={(val) => updateForm(val, 'vin')}
      />

      <TextInput
        style={styles.input}
        placeholder="Описание"
        value={orderCar.description}
        onChangeText={(val) => updateForm(val, 'description')}
      />

      <DatePicker
        style={{ width: '90%', marginBottom: 10 }}
        date={orderCar.date}
        mode="datetime"
        placeholder="Выберите дату"
        format=""
        confirmBtnText="Выбрать"
        cancelBtnText="Отмена"
        onDateChange={(val) => formateDate(val)}
      />
    </>
  )
}


const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginBottom: 15,
    color: "#5687bf",
    fontSize: 30,
  },
  input: {
    width: '90%',
    fontSize: 15,
    borderWidth: 1,
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 10
  }
})