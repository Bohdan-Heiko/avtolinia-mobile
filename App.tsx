import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navigation } from './src/components/navigation/Navigation';

const App: React.FC = () => {



  return (
    <View style={styles.container}>
      <StatusBar style="light"  />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8f9',
    justifyContent: 'center',
  },
});


export default App