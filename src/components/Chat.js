import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Chat extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    Welcome, {this.props.name}
                </Text>
            </View>
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
