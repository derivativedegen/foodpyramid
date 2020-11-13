import React, { Component } from 'react';

export default class StatBox extends Component {
    render() {
        return(
            <div className="statbox shadow-lg p-3 mb-5 bg-black">
                <h3 className="">
                    <b>{this.props.text}</b>
                </h3>
                
                <br />

                <h4 className="">{this.props.stat}</h4>
            </div>
        )
    }
}