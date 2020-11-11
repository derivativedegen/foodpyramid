import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div class="container">
                <div class="row mb-5">

                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Company</h2>
                            <p>A Food Based Pyramid Scheme. Join now so you're not one of the last suckers who missed out.</p>
                            <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
                                <li class="ftco-animate"><a href="https://twitter.com/FoodPyramidWTF" target="_blank"><span class="icon-twitter"></span></a></li>
                                <li class="ftco-animate"><a href="https://discord.gg/zaT4Zb3" target="_blank"><span class="icon-discord"><img src="images/discord.png" class="discordlogo" /></span></a></li>
                                <li class="ftco-animate"><a href="https://t.me/joinchat/JjV7ewd3dVUJcOw8wRWs4w" target="_blank"><span class="icon-telegram"></span></a></li>
                                <li class="ftco-animate"><a href="https://medium.com/@FoodPyramid" target="_blank"><span class="icon-medium"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Contact Information</h2>
                            <ul class="list-unstyled">
                                <li><a href="#" class="py-2 d-block">42069 Your Mom's House</a></li>
                                <li><a href="#" class="py-2 d-block">(666) 420-6969</a></li>
                                <li><a href="#" class="py-2 d-block">foodpyramid@protonmail.com</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Quick Links</h2>
                            <ul class="list-unstyled">
                                <li><a href="#home" class="py-2 d-block">Home</a></li>
                                <li><a href="#about" class="py-2 d-block">About</a></li>
                                <li><a href="#roadmap" class="py-2 d-block">Roadmap</a></li>
                                <li><a href="/stats.html" class="py-2 d-block">Stats</a></li>
                                <li><a href="#team" class="py-2 d-block">Team</a></li>
                                <li><a href="https://medium.com/@FoodPyramid" class="py-2 d-block" target="_blank">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Just Do It.</h2>
                            <p>Imagine we wrote some convincing text here to make you sign up. And you did.</p>
                            <form action="#" class="subscribe-form">
                                <div class="form-group">
                                    <span class="icon icon-paper-plane"></span>
                                    <input type="text" class="form-control" placeholder="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}