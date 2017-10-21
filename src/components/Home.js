import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  DatePickerIOS,
  View
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux'

export default class Home extends React.Component {
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };
  state = {
    name: '',
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };
  onDateChange = (date) => {
    this.setState({date: date});
  }

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
        <Text style={styles.instructions}>
          And your age:
        </Text>
        <DatePickerIOS style={styles.datepicker}
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
          />
        <Button
          onPress={() => { 
            if (this.state.name.length == 0) {
              alert ("Please input your name.")
            } else {
            Actions.chat({
                name: this.state.name,
            })};
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
  datepicker: {
    alignSelf: 'stretch',
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