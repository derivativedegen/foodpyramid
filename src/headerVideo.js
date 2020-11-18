import React from 'react';
import BuyNavButton from './buyNavButton';
import SocialButtons from './socialButtons';
import { headings, siteLinks } from './siteData';

export default class HeaderVideo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const blogLink = siteLinks.blog
        const page = e.target.id;
        page === 'blog' ? window.open(blogLink) : this.props.onClick(page);
    }

    render() {
        return (
            <div className="container header-container justify-content-center">
                <div className="row d-flex justify-content-center shadow-lg mb-5 bg-black externalSiteFrameYT">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            title="Food Pyramid Trailer"
                            className="embed-responsive-item header-vid externalSiteFrameYT"
                            src={siteLinks.youtubeHeader} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                
                <div className="row justify-content-center">
                    <BuyNavButton handleClick={this.handleClick} pageName={'stats'} text={headings.statsButton} />
                </div>

                {this.props.mobile ? (
                    <div className="row justify-content-center">
                        <BuyNavButton handleClick={this.handleClick} pageName={'about'} text={headings.aboutButton} />
                        <BuyNavButton handleClick={this.handleClick} pageName={'team'} text={headings.teamButton} />
                        <BuyNavButton handleClick={this.handleClick} pageName={'blog'} text={headings.blogButton} />
                    </div>
                    ) : null
                }
                
                <div className="row justify-content-center">
                    <SocialButtons />
                </div>
            </div>
        )
    }
}