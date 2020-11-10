import React, { Component } from 'react';

export default class BuyNavButton extends Component {
    render() {
        return(
            <a href="" style={{color: '#FFFFFF'}}>
                <div className="buyboxnav">
                    <b id="stats" onClick={this.props.handleClick}>
                        Buy FOOD & fUSDC
                    </b>
                </div>
            </a>
        )
    }
}