import React, { Component } from 'react';

export default class TeamMember extends Component {
    render() {
        const imageData = 'url(' + this.props.image + ')';

        return(
            <div class="item text-center">
                <div class="testimony-wrap p-4 pb-5">
                    <div 
                        class="user-img mb-4" 
                        style={{backgroundImage: imageData, border: '1px solid white'}}>
                    </div>
                    
                    <div class="text">
                        <p class="mb-5">
                            {this.props.bio}
                        </p>

                        <div class="row justify-content-center">
                            <div class="testimony-bottom">
                                <a href={this.props.twitter} target="_blank">
                                    <p class="name">{this.props.name}</p>
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