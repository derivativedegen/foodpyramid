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
            foodEthPrice: this.props.foodEthPrice,
            rewardsFeth: this.props.rewardsFeth,
            fethBalanceFethEthLP: this.props.fethBalanceFethEthLP,
            ethBalanceFethEthLP: this.props.ethBalanceFethEthLP,
            fethBalanceLPinEth: this.props.fethBalanceLPinEth,
            showBuyLink: false,
            fethAPY: 0,
        }
        this.toggleBuyLink = this.toggleBuyLink.bind(this);
        this.toggleChartLink = this.toggleChartLink.bind(this);
    }

    toggleBuyLink(e) {
        const toggle = !this.state.showBuyLink;
        this.setState({
            showChartLink: false,
            showBuyLink: toggle,
        })
    }

    toggleChartLink(e) {
        const toggle = !this.state.showChartLink;
        this.setState({
            showBuyLink: false,
            showChartLink: toggle
        })
    }

    getFethAPY() {
        const rewards = (this.state.rewardsFeth + 130) * 0.7; // 629 + 130 = 759 FOOD
        const price = this.state.foodEthPrice; // 0.0220735 ETH
        const supply = this.state.fethBalanceLPinEth + this.state.ethBalanceFethEthLP; // 15.23551897 + 15.2355219 = 30.4710409291

        const weeklyYield = rewards * price / supply / 10;
        const yearlyYield = (((1+weeklyYield)**52) - 1) * 100;
        
        this.setState({
            fethAPY: yearlyYield.toFixed(2)
        })
    }

    componentDidMount() {
        this.getFethAPY();
    }
    
    render() {
        const fethPeg = this.state.fethPeg.toFixed(8);
        const fethRewards = this.state.rewardsFeth.toFixed(2);

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
                    <StatBox text={this.state.token.statbox[0].heading} stat={fethPeg + " ETH"} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={this.state.fethAPY + " %"} />
                    <StatBox text={this.state.token.statbox[2].heading} stat={fethRewards + " FOOD"} />
                </div>
            </div>
        )
    }
}