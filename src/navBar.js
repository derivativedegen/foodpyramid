import React from 'react';
import TitleLogo from './titleLogo';
import BuyNavButton from './buyNavButton';
import SocialButtons from './socialButtons';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    renderBuy() {
        if (this.props.page !== 'stats') {
            return (
                <BuyNavButton handleClick={this.handleClick} />
            )
        };
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <TitleLogo handleClick={this.handleClick} />

                    
                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                    </button>*/}

                    <SocialButtons />

                    <div className="collapse navbar-collapse" id="ftco-nav">
                    {/*this.renderBuy()*/}

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" key="nav-01"><a href="" className="nav-link"  id="home" onClick={this.handleClick}>Home</a></li>
                        <li className="nav-item" key="nav-02"><a href="" className="nav-link" id="about" onClick={this.handleClick}>About</a></li>
                        <li className="nav-item" key="nav-03"><a href="" className="nav-link" id="stats" onClick={this.handleClick}>Numbahs</a></li>
                        <li className="nav-item" key="nav-04"><a href="" className="nav-link" id="team" onClick={this.handleClick}>Team</a></li>
                        <li className="nav-item" key="nav-05"><a href="https://medium.com/@FoodPyramid" className="nav-link" target="_blank" rel="noreferrer">Blog</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}