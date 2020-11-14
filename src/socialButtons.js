import React, { Component } from 'react';
import './icomoon.css';

export default class SocialButtons extends Component {
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <ul class="ftco-footer-social list-unstyled">
                        <li class=""><a href="https://twitter.com/FoodPyramidWTF" target="_blank" rel="noreferrer"><span class="icon-twitter"></span></a></li>
                        <li class=""><a href="https://discord.gg/zaT4Zb3" target="_blank" rel="noreferrer"><span class="icon-discord"><img src="images/discord.png" class="discordlogo" alt="discord logo"/></span></a></li>
                        <li class=""><a href="https://t.me/joinchat/JjV7ewd3dVUJcOw8wRWs4w" target="_blank" rel="noreferrer"><span class="icon-telegram"></span></a></li>
                        <li class=""><a href="https://medium.com/@FoodPyramid" target="_blank" rel="noreferrer"><span class="icon-medium"></span></a></li>
                    </ul>
                </div>

                <div className="row justify-content-center gibmoney">
                    <a href="https://gib.money" target="_blank" rel="noreferrer">gib.money</a>
                </div>
            </div>
        )
    }
}