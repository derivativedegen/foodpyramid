import React from 'react';
import BuyNavButton from './buyNavButton';


export default class HeaderVideo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return (
            <div className="container header-container justify-content-center">
                <div className="row d-flex justify-content-center shadow-lg p-3 mb-5 bg-black rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item header-vid"
                            src="https://www.youtube.com/embed/PfhIERTpTh4" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <BuyNavButton handleClick={this.handleClick} pageName={'stats'} text="Buy" />
                    <BuyNavButton handleClick={this.handleClick} pageName={'about'} text="About"/>
                    <BuyNavButton handleClick={this.handleClick} pageName={'team'} text="Team"/>
                    <a href="https://foodpyramid.medium.com/" target="_blank">
                        <button className="buyboxnav" style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
                            Blog
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}