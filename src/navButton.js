import React, { Component } from 'react';

export default class NavItem extends Component {
    toggleClass() {
        if (this.props.active === this.props.id) {
            return 'nav-link-active'
        } else {
            return 'nav-link'
        }
    }

    render() {
        return (
            <button className={this.toggleClass()} id={this.props.id} onClick={this.props.onClick} >
                {this.props.name}
                {/*this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)*/}
            </button>
        )
    }
}
