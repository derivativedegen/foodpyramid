import React, { Component } from 'react';
import TokenButton from './tokenButton';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import { tokenData } from './siteData';

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTokenData: tokenData,
            singleTokenData: tokenData[0],
            token: 'FOOD',
            id: 0,
            buylink: tokenData[0].buylink,
            chartlink: tokenData[0].chartlink
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
                buylink: this.state.allTokenData.filter(token => token.name === this.state.token)[0].buylink, 
                chartlink: this.state.allTokenData.filter(token => token.name === this.state.token)[0].chartlink,
                singleTokenData: this.state.allTokenData.filter(token => token.name === this.state.token)[0]
            })
        }
    }

    render() {
        const tokenNum = this.state.allTokenData.filter((token) => token.name === this.state.token)[0].id;

        return (
            <div className="header-container">
                <div className="row d-flex justify-content-center">
                  <h2><b>Foodture of Finance</b></h2>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {this.state.allTokenData.map(token => 
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