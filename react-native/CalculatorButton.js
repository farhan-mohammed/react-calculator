import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CalculatorButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.button, ButtonTypeStyles[this.props.type]]}
                onPress={() => {
                    this.props.action(this.props.val);
                }}
            >
                <Text style={styles.buttonText}>{this.props.val}</Text>
            </TouchableOpacity>
        );
    }
}
const ButtonTypeStyles = StyleSheet.create({
    0: { backgroundColor: '#353535' },
    1: { backgroundColor: '#ff9501' },
    2: { backgroundColor: '#a5a5a5' },
});
const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'red',
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: '#050505',
        alignItems: 'center',
    },
    buttonText: { fontSize: 30 },
});
