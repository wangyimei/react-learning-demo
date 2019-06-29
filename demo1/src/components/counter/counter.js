import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {number: 0};
    }

    render() {
        return (
            <div>
                <button>-</button>
                {this.state.number}
                <button>+</button>
            </div>
        )
    }
}