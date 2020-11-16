import React, { Component } from 'react';

export default class TeamMember extends Component {
    render() {
        const imageData = 'url(' + this.props.image + ')';

        return(
            <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5 shadow-lg bg-black">
                    <div className="user-img mb-4" style={{backgroundImage: imageData, border: '1px solid white'}}>
                    </div>
                    <div className="text">
                        <p className="mb-5">{this.props.bio}</p>
                        <div className="row justify-content-center">
                            <div className="testimony-bottom">
                                <a href={this.props.twitter} target="_blank" rel="noreferrer">
                                    <p className="name">{this.props.name}</p>
                                </a>
                                <span>
                                    {this.props.title}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}