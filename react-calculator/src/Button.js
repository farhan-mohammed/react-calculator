import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        let buttonType = ['nums', 'action', 'terminate'];
        return (
            <div
                className={`calculator-button ${buttonType[this.props.type]}`}
                onClick={this.props.action ? () => this.props.action(this.props.val) : ''}
            >
                {this.props.val}
            </div>
        );
    }
}
