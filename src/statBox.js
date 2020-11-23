import React, { Component } from 'react';

export default class StatBox extends Component {
    render() {
        return(
            <div className="statbox shadow-lg p-3 mb-5 bg-black">
                <h3 className="">
                    <b>{this.props.text}</b>
                </h3>
                
                <div className="row justify-content-center">                
                    <h4 className="statbox-stat">{this.props.stat}</h4>
                </div>
            </div>
        )
    }
}

/*
-- ADD TIME UPDATED --
    const date = new Date(Date.now()).toUTCString()
    <p><i>Updated: {date}</i></p>
-- Fix Statbox-state CSS --
*/


/*
<div className="statbox shadow-lg p-3 mb-5 bg-black">
    <h3 className="">
        <b>{this.props.text}</b>
    </h3>
    
    <div className="row justify-content-center">                
        <h4 className="statbox-stat">{this.props.stat}</h4>
    </div>
</div>
*/