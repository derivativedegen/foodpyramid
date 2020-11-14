import React, { Component } from 'react';

export default class BackButton extends Component {
    render() {
        return(
            <button className="backbutton shadow-lg">
                <h4 style={{color: '#FFFFFF', fontSize: 20,}} 
                    id={this.props.pageName} 
                    onClick={this.props.handleClick}
                >
                        {this.props.text}
                </h4>
            </button>
        )
    }
}