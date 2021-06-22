import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Hello World!</Text>

      <View>
        <Text>Welcome to the app</Text>
        <Text numberOfLines={1} onPress={handlePress}>
          Lots of text can be truncated to display only on one line. This is done but using numberOfLines
        </Text>
      </View>

      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image style={styles.imageIcon} source={require('./assets/icon.png')} />
      </TouchableHighlight>

      <View>
        <Button
          title="Press me for an alert"
          onPress={() =>
            Alert.alert('Congratulations', 'You pressed the button', [
              { text: 'Yes', onPress: () => console.log('Yes') },
              { text: 'No', onPress: () => console.log('No') },
            ])
          }
        />
        <Button title="Press me for a prompt" onPress={() => Alert.prompt('Congratulations', 'You pressed the button', (text) => console.log(text))} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    
  },
  imageIcon: {
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
