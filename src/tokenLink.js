import React, { Component } from 'react';

export default class TokenLink extends Component {
    render() {
        return(
            <button className="tokenlink shadow-lg p-3 mb-5 bg-black" onClick={this.props.onClick}>
                <h3 className="black">
                    <b>
                        <a href={this.props.link} target="_blank" style={{color: 'white'}} rel="noreferrer">{this.props.text}</a>
                    </b>
                </h3>
            </button>
        )
    }
}