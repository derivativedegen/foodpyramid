import React, { Component } from 'react';

export default class BuyNavButton extends Component {
    render() {
        return(
            <button className="buyboxnav">
                <h4 style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold',}} 
                    id={this.props.pageName} 
                    onClick={this.props.handleClick}
                >
                        {this.props.text}
                </h4>
            </button>
        )
    }
}