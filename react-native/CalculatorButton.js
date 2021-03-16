import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class CalculatorButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.button, ButtonTypeStyles[this.props.type]]}
                onPress={
                    this.props.action
                        ? () => this.props.action(this.props.val)
                        : () => {
                              console.log('No Action Performed.');
                          }
                }
            >
                <Text style={styles.buttonText}>{this.props.val}</Text>
            </TouchableOpacity>
        );
    }
}
const ButtonTypeStyles = StyleSheet.create({
    0: {
        backgroundColor: '#353535',
    },
    1: {
        backgroundColor: '#ff9501',
    },
    2: {
        backgroundColor: '#a5a5a5',
    },
});
const styles = StyleSheet.create({
    button: {
        width: '25vw',
        height: '25vw',
        margin: 10,
        backgroundColor: 'red',
        borderRadius: '25vw',
        justifyContent: 'center',
        backgroundColor: '#050505',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
    },
});
