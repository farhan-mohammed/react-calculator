import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import CalculatorScreen from './CalculatorScreen';
const INITAL_STATE = {
    firstNum: 0,
    secondNum: null,
    ans: null,
    action: null,
    stage: 0,
};
export default class App extends React.Component {
    state = INITAL_STATE;
    // Given Number i
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

    // sets action a into our state
    setAction = (a) => {
        // if state is 0 , change to state 1
        if (this.state.stage === 0) {
            this.setState({ action: a, stage: 1 });
            //  if state is 2, set our previous answer as a our first number
        } else if (this.state.stage === 2) {
            this.setState({
                action: a,
                stage: 1,
                firstNum: this.state.ans,
                secondNum: null,
                ans: null,
            });
            // if the stage is already 1, empty the second value into the first value
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

    // Peferform action a on the first number and the second number
    solve = (a) => {
        console.log('ansero');
        switch (a) {
            case '-':
                return (
                    this.state.firstNum - (this.state.secondNum === null ? 0 : this.state.secondNum)
                );
            case 'x':
                return (
                    this.state.firstNum * (this.state.secondNum === null ? 1 : this.state.secondNum)
                );
            default:
                return (
                    this.state.firstNum + (this.state.secondNum === null ? 0 : this.state.secondNum)
                );
        }
    };

    doTask = (a) => {
        switch (a) {
            case 'c':
                this.setState(INITAL_STATE);
                break;
            default:
                // Go from stage 1 to stage 2.
                if (this.state.stage === 1) {
                    if (this.state.secondNum === null) {
                        alert('Please enter a number.');
                    } else {
                        console.log('here');
                        console.log(this.solve(this.state.action));
                        this.setState({ stage: 2, ans: this.solve(this.state.action) });
                    }
                }
            // Do nothing when stage is 2 or 0.
        }
    };

    render() {
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
        let actions = [this.setNumber, this.setAction, this.doTask];
        return (
            <View style={styles.container}>
                <View style={styles.ButtonScreenContainer}>
                    <CalculatorScreen
                        firstNum={this.state.firstNum}
                        secondNum={this.state.secondNum}
                        ans={this.state.ans}
                    />
                </View>
                <View style={styles.ButtonListContainer}>
                    {buttons.map(({ val, type }) => (
                        <CalculatorButton key={val} val={val} type={type} action={actions[type]} />
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonScreenContainer: {
        width: '100%',
    },
    ButtonListContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
