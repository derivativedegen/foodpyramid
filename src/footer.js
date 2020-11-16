import React, { Component } from 'react';
import BackButton from './backButton';
import SocialButtons from './socialButtons';

export default class Footer extends Component {
    render() {
        return(
            <div>
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