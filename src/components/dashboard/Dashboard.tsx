import { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native"
import DatePicker from 'react-native-datepicker'



export const Dashboard: React.FC = () => {
  const [orderCar, setOrderCar] = useState({
    number: "",
    phone: "",
    date: "",
    name: "",
    vin: "",
    description: ""
  })

  console.log(orderCar);


  const updateForm = (text: string, name: string) => {
    setOrderCar({
      ...orderCar,
      [name]: text
    })
  }

  return (
    <ScrollView style={styles.container} >
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Записать машину</Text>

        <TextInput
          style={styles.input}
          placeholder="Number"
          value={orderCar.number}
          maxLength={4}
          onChangeText={(val) => updateForm(val, 'number')}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={orderCar.phone}
          onChangeText={(val) => updateForm(val, 'phone')}
        />

        <DatePicker
          style={{ width: '90%', marginBottom: 10 }}
          date={orderCar.date}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD-HH-mm"
          // minDate="2016-05-01"
          // maxDate="2025-06-01"
          confirmBtnText="Выбрать"
          cancelBtnText="Отмена"
          is24Hour={false}
          onDateChange={(val) => updateForm(val, 'date')}
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Date"
          value={orderCar.date}
          onChangeText={(val) => updateForm(val, 'date')}
        /> */}

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={orderCar.name}
          onChangeText={(val) => updateForm(val, 'name')}
        />

        <TextInput
          style={styles.input}
          placeholder="VinCode"
          value={orderCar.vin}
          onChangeText={(val) => updateForm(val, 'vin')}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={orderCar.description}
          onChangeText={(val) => updateForm(val, 'description')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
    color: "#5687bf",
    fontSize: 30,
  },
  inputContainer: {
    width: '100%',
    paddingLeft: '5%',
    justifyContent: 'center'
  },
  input: {
    width: '90%',
    fontSize: 15,
    borderWidth: 1,
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 10
  }
});