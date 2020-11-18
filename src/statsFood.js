import React, { Component } from 'react';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown';
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
            foodEthPrice: this.props.foodEthPrice,
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

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const foodCirculating = this.numberWithCommas(Math.ceil(this.state.foodCirculating))

        return(
            <div>
                <div className="row justify-content-center">
                    <TokenLink text={headings.buy + " " + this.state.token.name} onClick={this.toggleBuyLink} />
                    <TokenLink text={this.state.token.name + " " + headings.chart} onClick={this.toggleChartLink} />
                </div>

                {this.state.showBuyLink ? <SiteFrame src={this.state.token.buylink} /> : null }
                {this.state.showChartLink ? <SiteFrame src={this.state.token.chartlink} /> : null }


                <div className="row justify-content-center">
                    <StatBox text={this.state.token.statbox[0].heading} stat={this.state.foodEthPrice} />
                    <StatBox text={this.state.token.statbox[1].heading} stat={foodCirculating} />
                    <StatBox text={this.state.token.statbox[2].heading} stat={this.state.token.statbox[2].stat} />
                </div>
            </div>
        )
    }
}