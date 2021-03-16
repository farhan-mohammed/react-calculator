import React, { Component } from 'react';
import Button from './Button';
import CalculatorScreen from './CalculatorScreen';
const INITAL_STATE = {
    firstNum: 0,
    secondNum: null,
    ans: null,
    action: null,
    stage: 0,
};
export default class App extends Component {
    state = INITAL_STATE;
    setNumber = (i) => {
        switch (this.state.stage) {
            case 0:
                if (this.state.firstNum === null) {
                    this.setState({ firstNum: i });
                } else {
                    this.setState({ firstNum: this.state.firstNum * 10 + i });
                }
                break;
            case 1:
                if (this.state.secondNum === null) {
                    this.setState({ secondNum: i });
                } else {
                    this.setState({ secondNum: this.state.secondNum * 10 + i });
                }
                break;
            case 2:
                this.setState({ firstNum: i, secondNum: null, ans: null, stage: 0 });
                break;
            default:
                alert('Somethings Wrong!');
        }
    };
    setAction = (a) => {
        console.log(this.state);
        if (this.state.stage === 0) {
            if (this.state.firstNum === null) {
                alert('Please enter a number first,');
            } else {
                this.setState({ action: a, stage: 1 });
            }
        } else if (this.state.stage === 2) {
            this.setState({
                action: a,
                stage: 1,
                firstNum: this.state.ans,
                secondNum: null,
                ans: null,
            });
        } else {
            this.setState({
                firstNum: this.solve(this.state.action),
                secondNum: null,
                ans: null,
                action: a,
                stage: 1,
            });
        }
    };
    solve = (a) => {
        switch (a) {
            case '-':
                return this.state.firstNum - this.state.secondNum;
            case 'x':
                return this.state.firstNum * this.state.secondNum;
            case '/':
                if (this.state.secondNum === 0) {
                    alert('Cannot divide by 0!');
                    return this.state.firstNum;
                } else {
                    return this.state.firstNum / this.state.secondNum;
                }
            default:
                return this.state.firstNum + this.state.secondNum;
        }
    };
    doTask = (a) => {
        switch (a) {
            case 'c':
                this.setState(INITAL_STATE);
                break;
            default:
                if (this.state.stage === 0) {
                    alert('Please pick an operation first and enter a number');
                } else if (this.state.stage === 1) {
                    if (this.state.secondNum === null) {
                        alert('Please enter a number.');
                    } else {
                        this.setState({ stage: 2, ans: this.solve(this.state.action) });
                    }
                } else if (this.state.stage === 2) {
                    //  Do nothing
                }
        }
    };
    render() {
        let actions = [this.setNumber, this.setAction, this.doTask];
        let buttons = [
            { val: '+', type: 1 },
            { val: '-', type: 1 },
            { val: 'x', type: 1 },
            { val: 1, type: 0 },
            { val: 2, type: 0 },
            { val: 3, type: 0 },
            { val: 4, type: 0 },
            { val: 5, type: 0 },
            { val: 6, type: 0 },
            { val: 7, type: 0 },
            { val: 8, type: 0 },
            { val: 9, type: 0 },
            { val: 'c', type: 2 },
            { val: 0, type: 0 },
            { val: '=', type: 2 },
        ];
        return (
            <div className="calculator-con">
                <CalculatorScreen
                    firstNum={this.state.firstNum}
                    secondNum={this.state.secondNum}
                    ans={this.state.ans}
                />
                <div className="calculator-buttons">
                    {buttons.map(({ val, type }) => (
                        <Button val={val} type={type} action={actions[type]} />
                    ))}
                </div>
            </div>
        );
    }
}
