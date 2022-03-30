

import { Text, View, StyleSheet } from "react-native"



export const Jobs: React.FC = () => {


  return (
    <View style={styles.container} >
      <Text>Jobs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9f5e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});