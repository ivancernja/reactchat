import React, {Component} from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' title='Home' component={Home}/> 
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}