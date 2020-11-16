import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings, tokenData } from './siteData';


export default class FoodStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[0].name,
            buylink: tokenData[0].buylink,
            chartlink: tokenData[0].chartlink,
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const foodCirculating = this.numberWithCommas(Math.ceil(this.props.foodCirculating))

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
                    <StatBox text={'Circulating Supply'} stat={foodCirculating} />
                    <StatBox text={'Rewards Paid'} stat={'4,795.84 USDC'} />
                </div>
            </div>
        )
    }
}