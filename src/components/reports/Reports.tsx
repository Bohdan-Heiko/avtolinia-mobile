import { StyleSheet, Text, View } from "react-native"

export type Props = {
  navigation: { navigate: any }
}

export const Reports: React.FC<Props> = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text>Reports</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa5eff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})