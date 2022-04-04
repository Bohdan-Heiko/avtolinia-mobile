import { View, StyleSheet, ScrollView, Text, TextInput, Button, TouchableOpacity, } from "react-native"
import { BockedToday } from "./BockedToday";
import { CarsAtWork } from "./CarsAtWork";
import { TextInputComponent } from "./TextInputComponent";

export const Dashboard: React.FC = () => {


  return (
    <ScrollView style={styles.container} >
      <View style={styles.inputContainer}>
        <TextInputComponent />
      </View>

      <View style={styles.bockedToday_container}>
        <Text style={styles.title}>Записаны на сегодня</Text>
        <BockedToday />
        <BockedToday />
      </View>

      <CarsAtWork />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },

  inputContainer: {
    width: '100%',
    paddingLeft: '5%',
    justifyContent: 'center',
    marginBottom: 10
  },

  bockedToday_container: {
    alignItems: 'center',

  },
  title: {
    fontSize: 25,
    marginBottom: 7,
  },
});