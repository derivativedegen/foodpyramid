import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings, tokenData } from './siteData';


export default class FoodStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[0],
            foodCirculating: this.props.foodCirculating,
            foodEthPrice: this.props.foodEthPrice,
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const foodCirculating = this.numberWithCommas(Math.ceil(this.state.foodCirculating))

        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink link={this.state.token.buylink} text={headings.buy + " " + this.state.token.name} />
                    <TokenLink link={this.state.token.chartlink} text={this.state.token.name + " " + headings.chart} />
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
                    <StatBox text={this.state.token.statbox[0].heading} stat={this.state.foodEthPrice} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={foodCirculating} />
                    <StatBox text={this.state.token.statbox[2].heading} stat={'4,795.84 USDC'} />
                </div>
            </div>
        )
    }
}