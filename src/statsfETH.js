import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings, tokenData } from './siteData';

export default class FethStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[2].name,
            buylink: tokenData[2].buylink,
            chartlink: tokenData[2].chartlink,
        }
    }

    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink link={this.state.buylink} text={headings.buy + " " + this.state.token} />
                    <TokenLink link={this.state.chartlink} text={this.state.token + " " + headings.chart} />
                </div>

                <div id="countdown" className="justify-content-center">
                    <hr className="hrwhite" />
                    <div className="row justify-content-center">
                        <h4>{headings.nextRebase}</h4>
                    </div>
                    <Countdown target={this.props.nextRebase} />
                    <hr className="hrwhite" />
                </div>

                <div className="row justify-content-center">
                    <StatBox text={'Price Peg'} stat={'1'} />
                    <StatBox text={'Rebase'} stat={`UTC 4H Close`} />
                    <StatBox text={'Rewards Paid'} stat={'Coming Soon'} />
                </div>
            </div>
        )
    }
}