import React, { Component } from 'react';

export default class TokenButton extends Component {
    toggleClass() {
        if (this.props.active === this.props.id) {
            return 'tokenbutton-active shadow-lg p-2 mb-5 bg-black'
        } else {
            return 'tokenbutton shadow-lg p-2 mb-5 bg-black'
        }
    }

    render() {
        return(
            <button className={this.toggleClass()}>
                    <h4>
                        <b 
                            onClick={this.props.handleClick} 
                            id={this.props.id}
                            name={this.props.name}
                        >
                            {this.props.name}
                        </b>
                    </h4>
            </button>
        )
    }
}