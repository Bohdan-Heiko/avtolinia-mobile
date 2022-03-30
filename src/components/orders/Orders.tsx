import { StyleSheet, Text, View } from "react-native"

export type Props = {
  navigation: { navigate: any }
}

export const Orders: React.FC<Props> = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})