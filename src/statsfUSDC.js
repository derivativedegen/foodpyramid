import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
import { headings, tokenData } from './siteData';
import SiteFrame from './siteFrame';

export default class FusdcStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[1],
            foodUsdcPrice: this.props.foodUsdcPrice,
            rewardsFusdc: this.props.rewardsFusdc,
            fusdcBalanceFusdcUsdcLP: this.props.fusdcBalanceFusdcUsdcLP,
            usdcBalanceFusdcUsdcLP: this.props.usdcBalanceFusdcUsdcLP,
            showBuyLink: false,
            showChartLink: false,
            fusdcAPY: 0,
        }
        this.toggleBuyLink = this.toggleBuyLink.bind(this);
        this.toggleChartLink = this.toggleChartLink.bind(this);
    }

    getFusdcAPY() {
        const rewards = this.state.rewardsFusdc;
        const price = this.state.foodUsdcPrice; 
        const supply = this.state.usdcBalanceFusdcUsdcLP * 2; 

        const weeklyYield = rewards * price / supply;

        console.log(weeklyYield);
        const yearlyYield = (((1+weeklyYield)**52) - 1) * 100;
        
        this.setState({
            fusdcAPY: yearlyYield.toFixed(2)
        })
    }

    toggleBuyLink(e) {
        const toggle = !this.state.showBuyLink;
        this.setState({
            showChartLink: false,
            showBuyLink: toggle
        })
    }

    toggleChartLink(e) {
        const toggle = !this.state.showChartLink;
        this.setState({
            showBuyLink: false,
            showChartLink: toggle
        })
    }

    componentDidMount() {
        this.getFusdcAPY();
    }
    
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink text={headings.buy + " " + this.state.token.name} onClick={this.toggleBuyLink} />
                    <TokenLink text={this.state.token.name + " " + headings.chart} onClick={this.toggleChartLink} />
                </div>

                {this.state.showBuyLink ? <SiteFrame src={this.state.token.buylink} /> : null }
                {this.state.showChartLink ? <SiteFrame src={this.state.token.chartlink} /> : null }

                <div id="countdown" className="justify-content-center">
                    <hr className="hrwhite" />
                    <div className="row justify-content-center">
                        <h4>{headings.nextRebase}</h4>
                    </div>
                    <Countdown target={this.props.nextRebase} />
                    <hr className="hrwhite" />
                </div>

                <div className="row justify-content-center">
                    <StatBox text={this.state.token.statbox[0].heading} stat={'$' + this.state.foodUsdcPrice.toFixed(2)} />
                    <StatBox text={this.state.token.statbox[5].heading} stat={this.state.fusdcAPY + ' %'} />
                    <StatBox text={this.state.token.statbox[4].heading} stat={this.state.rewardsFusdc.toFixed(2) + ' USDC'} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={this.state.token.statbox[1].stat} />
                    <StatBox text={this.state.token.statbox[3].heading} stat={this.state.token.statbox[3].stat} />
                    <StatBox text={this.state.token.statbox[2].heading} stat={this.state.token.statbox[2].stat} />
                </div>
            </div>
        )
    }
}