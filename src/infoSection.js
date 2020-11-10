import React, { Component } from 'react';
import BulletPoint from './bulletPoint.js';

export default class InfoSection extends Component {
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
                        <BulletPoint 
                            heading="Price Pumps are Programmed."
                            details="Advanced next generation 4D cloud enabled AI ponzinomic technologies. Price to Free Cashflow, pfft, how bout Price to Free Pumpflow?"
                            image="images/bullet-1.png"
                        />
                        <BulletPoint 
                            heading="Rug Pulls that Pay You"
                            details={`Instead of constantly worrying about "wen rug" just stake your LP tokens in our Rug Pull Profit Sharing Initiative™ and earn every 4 hours.`}
                            image="images/bullet-2.png"
                        />
                        <BulletPoint 
                            heading="Fair Distribution...for Everyone."
                            details="Hard contribution limits per person, and at least 50% of total FOOD supply distributed to project coders, governance participants & other contributors."
                            image="images/bullet-3.png"
                        />
                        <BulletPoint 
                            heading="Staking Rewards...not in Shitcoins."
                            details="Stablecoins, ETH, BTC, DeFi Blue Chips... unlike other yield farming food tokens, staking rewards have long-term value."
                            image="images/bullet-4.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}