
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native"


export const BockedToday: React.FC = () => {

  return (
    <View style={styles.bockedToday}>
      <Text style={styles.time}>11:40</Text>
      <View style={styles.description_container}>
        <Text style={styles.client_name}>Дмитрий (095 210 67 58) </Text>
        <Text style={styles.description}>Примичание:</Text>
        <Text style={styles.description_text}>ТО + шиномонтаж + помыть ТО + шиномонтаж + помытьТО +
          шиномонтаж ТО + шиномонтаж + помыть ТО + шиномонтаж + помытьТО
        </Text>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.btn}>
            <Button
              onPress={() => console.log('Позвонить')}
              title="Позвонить"
              color="#FF7212"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Button
              onPress={(id) => console.log('Принять', id.currentTarget)}
              title="Принять"
              color="#0066FF"

            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bockedToday: {
    width: '95%',
    backgroundColor: '#F2F7FF',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15
  },
  time: {
    paddingLeft: 5,
    fontSize: 20
  },
  description_container: {
    paddingLeft: 15,
    width: "88%"
  },
  client_name: {
    fontSize: 20,
    marginBottom: 5
  },
  description: {
    fontSize: 15,
    marginBottom: 5
  },
  description_text: {
    fontSize: 15,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 3,
    marginRight: 15,

  },
});