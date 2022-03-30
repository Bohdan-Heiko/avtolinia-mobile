import { StyleSheet, Text, View } from "react-native"

export type Props = {
  navigation: { navigate: any }
}

export const Client: React.FC<Props> = () => {


  return (
    <View style={styles.container}>
      <Text>Client</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
})