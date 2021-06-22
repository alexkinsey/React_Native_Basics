import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Welcome to the app</Text>
      <Text numberOfLines={1} onPress={handlePress}>Lots of text can be truncated to display only on one line. This is done but using numberOfLines</Text>
      <Image style={styles.imageIcon} source={require('./assets/icon.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    width: 100,
    height: 100
  }
});
