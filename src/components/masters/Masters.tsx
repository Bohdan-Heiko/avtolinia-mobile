
import { Text, View, StyleSheet } from "react-native"



export const Masters: React.FC = () => {


  return (
    <View style={styles.container} >
      <Text>Masters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});