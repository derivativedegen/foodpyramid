import React from 'react';
import { headings } from './siteData'

export default class TitleLogo extends React.Component {
    render() {
        return(
            <button className="navbar-brand" id="home" onClick={this.props.handleClick} >
                <img src="images/logo-transparent.png" className="header-logo" alt="logo" id="home" onClick={this.props.handleClick}/>
                {headings.siteTitle}
            </button>
        )
    }
}