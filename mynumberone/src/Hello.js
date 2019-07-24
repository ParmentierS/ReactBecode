import React, { Component } from 'react';

export default class Hello extends Component {
    render() 
    {
        return (
        <section className="App">
            <p>Hello {this.props.param} ! </p>
        </section>
        );
    }
}