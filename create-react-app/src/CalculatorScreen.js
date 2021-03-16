import React, { Component } from 'react';

export default class CalculatorScreen extends Component {
    renderScreenValue = () => {
        if (this.props.ans !== null) {
            return this.props.ans;
        } else if (this.props.secondNum !== null) {
            return this.props.secondNum;
        } else if (this.props.firstNum !== null) {
            return this.props.firstNum;
        }
        return '';
    };
    render() {
        return <div className="calculator-screen">{this.renderScreenValue()}</div>;
    }
}
