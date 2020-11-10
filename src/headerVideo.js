import React from 'react';

export default class HeaderVideo extends React.Component {
    render() {
        return (
            <div className="container header-container">
                <div className="row d-flex justify-content-center shadow-lg p-3 mb-5 bg-black rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                        className="embed-responsive-item header-vid"
                        src="https://www.youtube.com/embed/PfhIERTpTh4" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
}