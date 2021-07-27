import React, { Component } from "react";
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {...initialState};
    }
    
    clearMemory = () => {
        this.setState({...initialState})
    }

    doOperation = (operation) => {
        console.log(operation)
    }

    equal = () => {
        console.log('equal')
    }

    sendDigits = (digit) => {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState( { displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render () {
        const {
            clearMemory,
            doOperation,
            sendDigits,
            equal
        } = this;

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label="AC" triple click={clearMemory}/>
                <Button label="/" operation click={doOperation}/>
                <Button label="7" click={sendDigits}/>
                <Button label="8" click={sendDigits}/>
                <Button label="9" click={sendDigits}/>
                <Button label="*" operation click={doOperation}/>
                <Button label="4" click={sendDigits}/>
                <Button label="5" click={sendDigits}/>
                <Button label="6" click={sendDigits}/>
                <Button label="-" operation click={doOperation}/>
                <Button label="1" click={sendDigits}/>
                <Button label="2" click={sendDigits}/>
                <Button label="3" click={sendDigits}/>
                <Button label="+" operation click={doOperation}/>
                <Button label="0" double click={sendDigits}/>
                <Button label="." click={sendDigits}/>
                <Button label="=" operation click={equal}/>
            </div>
        )
    }
}