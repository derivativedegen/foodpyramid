import React, { Component } from 'react';
import BulletPoint from './bulletPoint';
import BackButton from './backButton';
import { aboutData, headings } from './siteData';
import SocialButtons from './socialButtons';


export default class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulletData: aboutData
        }
    }

    render() {
        return(
            <div className="info-container">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5 pb-5">
                        <div className="col-md-8">
                            <img src="images/logo-transparent.png" className="infoimg" alt="logo"/>
                            <h2>{headings.about}</h2>
                        </div>
                    </div>
                    

                    <div className="row">
                        {this.state.bulletData.map((bulletPoint, i) => 
                            <BulletPoint
                                heading={bulletPoint.heading}
                                details={bulletPoint.details}
                                image={bulletPoint.image}
                                key={i}
                            />
                        )}
                    </div>
                </div>

                {this.props.mobile ? (
                        <div class="row justify-content-center">
                            <BackButton text="<" handleClick={this.props.onClick} />
                        </div>
                    ) : null
                }
                

                <SocialButtons />
            </div>
        )
    }
}