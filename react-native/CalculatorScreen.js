import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Screen extends Component {
    renderScreenValue = () => {
        if (this.props.ans !== null) {
            return this.props.ans;
        } else if (this.props.secondNum !== null) {
            return this.props.secondNum;
        } else if (this.props.firstNum !== null) {
            return this.props.firstNum;
        }
        return "";
    };
    render() {
        return (
            <View style={styles.screenContainer}>
                <Text style={styles.screen} numberOfLines={1}>
                    {this.renderScreenValue()}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        fontSize: 35,
        color: "#fff",
    },
    screenContainer: {
        textAlign: "right",
        padding: 30,
    },
});
