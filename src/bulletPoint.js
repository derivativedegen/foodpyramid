import React, { Component } from 'react';

export default class BulletPoint extends Component {
    render() {
        const heading = this.props.heading;
        const details = this.props.details;
        const bulletpic = this.props.image;

        return(
            <div className="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                    <div className="d-flex justify-content-center">
                        <div className="color-1 d-flex justify-content-center mb-3">
                            <span className="align-self-center">
                                <img src={bulletpic} style={{height: 100, width: 'auto'}} alt="bulletpoint" />
                            </span>
                        </div>
                    </div>

                    <div className="media-body p-2">
                        <h3 className="heading">{heading}</h3>
                        <p>{details}</p>
                    </div>
                </div>
            </div>      
        )
    }
}