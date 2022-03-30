import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native"



export const Dashboard: React.FC = () => {


  return (
    <View style={styles.container} >
      <Text style={styles.text}>Записать машину</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  text: {
    textAlign:"center"
  }
});