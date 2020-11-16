import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings } from './siteData';
import { tokenData } from './tokenData';


export default class FethStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[2].name,
            buylink: tokenData[2].buylink,
            chartlink: tokenData[2].chartlink,
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                    <StatBox text={'fETH Peg'} stat={'Coming Soon'} />
                    <StatBox text={'fETH Rebase'} stat={`UTC 4H Close`} />
                    <StatBox text={'fETH APY'} stat={'Coming Soon'} />
                </div>
            </div>
        )
    }
}