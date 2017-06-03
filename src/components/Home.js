/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  View
} from 'react-native';
import * as firebase from 'firebase';

import {
  Actions,
} from 'react-native-router-flux'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBIjqEXPPvCPG35S4r11sX3qGyDRvXqu94",
    authDomain: "chatreact-6caa6.firebaseapp.com",
    databaseURL: "https://chatreact-6caa6.firebaseio.com",
    projectId: "chatreact-6caa6",
    storageBucket: "chatreact-6caa6.appspot.com",
    messagingSenderId: "77417068086"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (

      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://media.giphy.com/media/tN3vUg9atNni0/giphy.gif'}}
        />
        <Text style={styles.welcome}>
          Welcome to ChatReact!
        </Text>
        <Text style={styles.instructions}>
          To get started, please enter your name:
        </Text>
        <TextInput 
          style={styles.nameInput}
          placeholder='John Doe'
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <Button
          onPress={() => {
            Actions.chat({
                name: this.state.name,
            });
            // navigate to chat screen
          }}
          title="Start chatting!"
          color="blue"
          accessibilityLabel="Tap to start chatting"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  nameInput: {
    textAlign: 'center',
    margin: 20,
    height: 20,
  },
  login: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
});


// App registration and rendering
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

