import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Welcome to the app</Text>
      <Text numberOfLines={1} onPress={handlePress}>
        Lots of text can be truncated to display only on one line. This is done but using numberOfLines
      </Text>

      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image style={styles.imageIcon} source={require('./assets/icon.png')} />
      </TouchableHighlight>

      <Button
        title="Press me"
        onPress={() =>
          Alert.alert('Congratulations', 'You pressed the button', [
            { text: 'Yes', onPress: () => console.log('Yes') },
            { text: 'No', onPress: () => console.log('No') },
          ])
        }
      />

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
    height: 100,
  },
});
