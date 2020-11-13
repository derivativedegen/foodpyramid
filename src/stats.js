import React, { Component } from 'react';
import TokenButton from './tokenButton';
import TokenLink from './tokenLink';
import StatBox from './statBox';
import Countdown from './Countdown'
import { tokenData } from './siteData';

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTokenData: tokenData,
            singleTokenData: tokenData[0],
            id: tokenData[0].id,
            token: tokenData[0].name,
            buylink: tokenData[0].buylink,
            chartlink: tokenData[0].chartlink,
            nextRebase: this.props.nextRebase
        };
        this.changeToken = this.changeToken.bind(this);
    }

    changeToken(e) {
        this.setState({ 
            id: parseInt(e.target.id)
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            const newToken = this.state.allTokenData[this.state.id];
            this.setState({
                singleTokenData: newToken,
                buylink: newToken.buylink, 
                chartlink: newToken.chartlink,
                token: newToken.name
            })
        }
    }

    render() {
        return (
            <div className="header-container">
                <div className="row d-flex justify-content-center">
                  <h2><b>Foodture of Finance</b></h2>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {this.state.allTokenData.map((token, i) => 
                            <TokenButton 
                                name={token.name} 
                                id={token.id}
                                key={i}
                                active={this.state.id} 
                                handleClick={this.changeToken} 
                                buylink={token.buylink}
                                chartlink={token.chartlink}
                            />
                        )}
                    </div>

                    <div className="row justify-content-center">
                        <TokenLink link={this.state.buylink} text={"Buy " + this.state.token} />
                        <TokenLink link={this.state.chartlink} text={this.state.token + " Chart"} />
                    </div>

                    <div id="countdown">
                        <hr className="hrwhite" />

                        <div className="row justify-content-center">
                            <h4>Next fToken Rebase</h4>
                        </div>
                        <Countdown target={this.state.nextRebase} />

                        <hr className="hrwhite" />
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

/*
If you want to toggle countdown based on FOOD/fToken selection add this logic:
{
    this.state.id !== 0 ? (
        <div>
            <hr className="hrwhite" />
            
            <div className="row justify-content-center">
                <h4>Next {this.state.token} Rebase</h4>
            </div>
            <Countdown target={this.state.nextRebase} />
            
            <hr className="hrwhite" />
        </div>
    ) : null
}
*/