import React, { Component } from 'react';
import TokenButton from './tokenButton';
import TokenLink from './tokenLink';
import StatBox from './statBox';

const tokendata = 
[{
    name: 'FOOD',
    id: 0,
    buylink: `https://uniswap.exchange/swap?inputCurrency=ETH&outputCurrency=0xf3348f43503d35cad421864d941cd89bc3a0b797`,
    chartlink: `https://dex.vision/?ticker=UniswapV2:FOODUSD-0x69CfC0b5aF7231b316de8681F81a205338e94973&interval=60`,
    statboxes: [{
        heading: 'FOOD Supply',
        stat: '100,000'
        }, {
        heading: 'FOOD Circulating',
        stat: '18,750'
        }, {
        heading: 'FOOD APY',
        stat: '74%'   
    }]
},
{
    name: 'fUSDC',
    id: 1,
    buylink: `https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6b951017a3212edc6b275976bfdd50969f6e1c62`,
    chartlink: `https://beta.dex.vision/?ticker=UniswapV2:FUSDCUSDC-0x6fc30adEdD79fFB4cBB2FDbef1F779bBF3aa8d36&interval=240`,
    statboxes: [{
        heading: 'fUSDC Peg',
        stat: '$3.58'
        }, {
        heading: 'fUSDC Rebase',
        stat: '4H Candle Close'
        }, {
        heading: 'fUSDC LP APY',
        stat: '16,209%'   
    }]
}];

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleTokenData: tokendata[0],
            token: 'FOOD',
            id: 0,
            buylink: tokendata[0].buylink,
            chartlink: tokendata[0].chartlink
        };
        this.changeToken = this.changeToken.bind(this);
    }

    changeToken(e) {
        this.setState({ 
            token: e.target.id
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.token !== this.state.token) {
            this.setState({
                buylink: tokendata.filter(token => token.name === this.state.token)[0].buylink, 
                chartlink: tokendata.filter(token => token.name === this.state.token)[0].chartlink,
                singleTokenData: tokendata.filter(token => token.name === this.state.token)[0]
            })
        }
    }

    render() {
        const tokenNum = tokendata.filter((token) => token.name === this.state.token)[0].id;
        console.log(this.state.singleTokenData)

        return (
            <div className="header-container">
                <div className="row d-flex justify-content-center">
                  <h1><b>Foodture of Finance</b></h1>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {tokendata.map(token => 
                            <TokenButton 
                                name={token.name} 
                                key={token.id}
                                handleClick={this.changeToken} 
                                active={this.state.token} 
                                buylink={token.buylink}
                                chartlink={token.chartlink}
                            />
                        )}
                    </div>

                    <hr className="hrwhite" />
                    
                    <div className="row justify-content-center">
                        <TokenLink link={this.state.buylink} text={"Buy " + this.state.token} />
                        <TokenLink link={this.state.chartlink} text={this.state.token + " Chart"} />
                    </div>

                    <div className="row justify-content-center">
                    {this.state.singleTokenData.statboxes.map((box, i) => 
                        <StatBox text={box.heading} stat={box.stat} key={i}/>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}