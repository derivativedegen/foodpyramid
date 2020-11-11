import React, { Component } from 'react';

export default class BuyNavButton extends Component {
    render() {
        return(
            <a href="" id="stats" onClick={this.props.handleClick} 
                style={{
                    color: '#FFFFFF', 
                    fontSize: 20, 
                    fontWeight: 'bold',
                }}>
                <div className="buyboxnav" id="stats">
                    <b id="stats" onClick={this.props.handleClick}>
                        Join The Pyramid
                    </b>
                </div>
            </a>
        )
    }
}

/*
    <button className="buyboxnav" id="stats" onClick={this.props.handleClick}>
        <h4 style={{color: '#FFFFFF'}}>
            <b id="stats" onClick={this.props.handleClick}>
                Buy FOOD & fUSDC
            </b>
        </h4>
    </button>
*/