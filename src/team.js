import React, { Component } from 'react';
import { teamData } from './siteData';
import TeamMember from './teamMember';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: teamData
        }
    }
    render() {
        return(
            <div class="header-container justify-content-center">
                <div class="row justify-content-center mb-5 pb-5">
                    <div class="col-md-7 text-center heading-section">
                        <h3><b>Meet the legendary team that's ending world hunger with $FOOD.</b></h3>
                    </div>
                </div>

                <div class="container">
                    <div class="row justify-content-center mb-5 pb-5">
                        {this.state.teamData.map((member) => 
                            <TeamMember 
                                name={member.name}
                                title={member.title}
                                bio={member.bio}
                                image={member.image}
                                twitter={member.twitter}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    } 
}