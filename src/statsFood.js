import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import { headings, tokenData } from './siteData';
import SiteFrame from './siteFrame';


export default class FoodStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: tokenData[0],
            showBuyLink: false,
            showChartLink: false,
            foodCirculating: this.props.foodCirculating,
            foodBalanceFoodEthLP: this.props.foodBalanceFoodEthLP,
            ethBalanceFoodEthLP: this.props.ethBalanceFoodEthLP,
            foodRewards: this.props.foodRewards,
            foodEthPrice: this.props.foodEthPrice,
            foodUsdcPrice: this.props.foodUsdcPrice,
            foodAPY: 0,
        }
        this.toggleBuyLink = this.toggleBuyLink.bind(this);
        this.toggleChartLink = this.toggleChartLink.bind(this);
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

    getFoodAPY() {
        const rewards = this.state.foodRewards * 0.3;
        const price = this.state.foodEthPrice;
        const supply = this.state.foodCirculating - this.state.foodBalanceFoodEthLP;
        const weeklyYield = rewards / price / supply;
        const yearlyYield = (((1+weeklyYield)**52) - 1) * 100;
        this.setState({
            foodAPY: yearlyYield.toFixed(2)
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentDidMount() {
        this.getFoodAPY();
    }
    

    render() {
        const foodCirculating = this.numberWithCommas(Math.ceil(this.state.foodCirculating))
        const foodRewards = this.state.foodRewards.toFixed(4) * 0.3;
        const foodUsdcPrice = this.state.foodUsdcPrice.toFixed(2);


        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink text={headings.buy + " " + this.state.token.name} onClick={this.toggleBuyLink} />
                    <TokenLink text={this.state.token.name + " " + headings.chart} onClick={this.toggleChartLink} />
                </div>

                {this.state.showBuyLink ? <SiteFrame src={this.state.token.buylink} /> : null }
                {this.state.showChartLink ? <SiteFrame src={this.state.token.chartlink} /> : null }


                <div className="row justify-content-center">
                    <StatBox text={this.state.token.statbox[0].heading} stat={this.state.foodEthPrice + " ETH"} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={'$' + foodUsdcPrice} />
                    <StatBox text={this.state.token.statbox[2].heading} stat={this.state.foodAPY + ' %'} />
                    <StatBox text={this.state.token.statbox[3].heading} stat={foodRewards + ' ETH'} />
                    <StatBox text={this.state.token.statbox[7].heading} stat={this.state.token.statbox[7].stat} />
                    <StatBox text={this.state.token.statbox[6].heading} stat={this.state.token.statbox[6].stat} />
                    <StatBox text={this.state.token.statbox[4].heading} stat={foodCirculating + ' / 100,000'} />
                    <StatBox text={this.state.token.statbox[5].heading} stat={this.state.token.statbox[5].stat} />
                </div>
            </div>
        )
    }
}