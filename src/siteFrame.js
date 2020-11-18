import React, { Component } from 'react';
import url from 'url';

export default class SiteFrame extends Component {
    render() {
        const address = this.props.src;
        const q = url.parse(address, true);

        return(
            <div className="externalSiteFrame justify-content-center shadow-lg bg-black">
                    <iframe 
                        src={address} 
                        title="externalSite" 
                        className="externalSiteChild"
                    ></iframe>

                    <div className="text-center">
                        <p><a href={address} target="_blank" rel="noreferrer">Open on {q.host}</a></p>
                    </div>
            </div>
        )
    }
}