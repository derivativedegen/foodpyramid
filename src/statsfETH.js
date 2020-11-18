import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings, tokenData } from './siteData';
import SiteFrame from './siteFrame';


export default class FethStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[2],
            fethPeg: this.props.fethPeg,
            showBuyLink: false,
        }
        this.toggleBuyLink = this.toggleBuyLink.bind(this);
    }

    toggleBuyLink(e) {
        const toggle = !this.state.showBuyLink;
        this.setState({
            showChartLink: false,
            showBuyLink: toggle
        })
    }
    
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink text={headings.buy + " " + this.state.token.name} onClick={this.toggleBuyLink} />
                    <TokenLink link={this.state.token.chartlink} text={this.state.token.name + " " + headings.chart} />
                </div>

                {this.state.showBuyLink ? <SiteFrame src={this.state.token.buylink} /> : null }

                <div id="countdown" className="justify-content-center">
                    <hr className="hrwhite" />
                    <div className="row justify-content-center">
                        <h4>{headings.nextRebase}</h4>
                    </div>
                    <Countdown target={this.props.nextRebase} />
                    <hr className="hrwhite" />
                </div>

                <div className="row justify-content-center">
                    <StatBox text={this.state.token.statbox[0].heading} stat={this.state.fethPeg} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={'2,534.06 USDC'} />
                </div>
            </div>
        )
    }
}