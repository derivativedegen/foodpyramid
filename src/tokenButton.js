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
            <div className={this.toggleClass()}>
                <a href="#">
                    <h4>
                        <b onClick={this.props.handleClick} id={this.props.id}>
                            {this.props.name}
                        </b>
                    </h4>
                </a>
            </div>
        )
    }
}