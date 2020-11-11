import React, { Component } from 'react';
import BulletPoint from './bulletPoint';
import { aboutData } from './siteData';

export default class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulletData: aboutData
        }
    }

    render() {
        return(
            <div className="header-container">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5 pb-5">
                        <div className="col-md-8">
                            <img src="images/logo-transparent.png" className="infoimg" alt="logo"/>
                            <h2>Crypto Twitter's very own fully upfront, completely honest Pyramid Scheme™ </h2>
                        </div>
                    </div>
                    

                    <div className="row">
                        {this.state.bulletData.map(bulletPoint => 
                            <BulletPoint
                                heading={bulletPoint.heading}
                                details={bulletPoint.details}
                                image={bulletPoint.image}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}