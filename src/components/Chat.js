import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'

export default class Chat extends React.Component {
    state = {
        messages: []
    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    //Send message
                }}
                user={{
                    _id: 1,
                }}
                />
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        textAlign: 'center',
        margin: 100,
        fontSize: 20
    }
});
