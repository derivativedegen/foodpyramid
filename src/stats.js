import React, { Component } from 'react';
import TokenButton from './tokenButton';
import TokenLink from './tokenLink';
import StatBox from './statBox';

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: 'FOOD'
        };
        this.changeToken = this.changeToken.bind(this);
    }

    changeToken(e) {
        this.setState({ token: e.target.id });
    }

    render() {
        return (
            <div className="header-container">
                <div className="row d-flex justify-content-center">
                  <h1><b>Foodture of Finance</b></h1>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <TokenButton name='FOOD' handleClick={this.changeToken} active={this.state.token} />
                        <TokenButton name='fUSDC' handleClick={this.changeToken} active={this.state.token} />
                        <TokenButton name='fETH' handleClick={this.changeToken} active={this.state.token} />
                        <TokenButton name='fBTC' handleClick={this.changeToken} active={this.state.token} />
                    </div>

                    <hr className="hrwhite" />
                    
                    <div className="row justify-content-center">
                        <TokenLink link={this.state.buylink} text={"Buy " + this.state.token} />
                        <TokenLink link={this.state.chartlink} text={this.state.token + " Chart"} />
                    </div>

                    <div class="row justify-content-center">
                        <StatBox text="FOOD Supply" stat="100,000" />
                        <StatBox text="FOOD Circulating" stat="18,750" />
                        <StatBox text="FOOD APY" stat="74%" />
                    </div>
                </div>
            </div>
        )
    }
}

/*
    {
        token: 'fUSDC',
        buylink: `https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6b951017a3212edc6b275976bfdd50969f6e1c62`,
        chartlink: `https://beta.dex.vision/?ticker=UniswapV2:FUSDCUSDC-0x6fc30adEdD79fFB4cBB2FDbef1F779bBF3aa8d36&interval=240`
    },
    {
        token: 'FOOD',
        buylink: `https://uniswap.exchange/swap?inputCurrency=ETH&outputCurrency=0xf3348f43503d35cad421864d941cd89bc3a0b797`,
        chartlink: `https://dex.vision/?ticker=UniswapV2:FOODUSD-0x69CfC0b5aF7231b316de8681F81a205338e94973&interval=60`
    }
*/