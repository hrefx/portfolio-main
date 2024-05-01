import React from "react";
import Work from './work1.png';
import WorkTwo from './work2.png';
import WorkThree from './work3.png';

function Experience() {
    return (
        <div id="portfolio">
            <div className="container-work">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={Work}  alt="work1"></img>
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
                            <a href="https://www.tiktok.com/en/" target="_blank">Link</a>                        
                        </div>
                    </div>
                    <div className="work">
                        <img src={WorkTwo}  alt="work2"></img>
                        <div className="layer">
                            <h3>Music App</h3>
                            <p>Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
                            <a href="https://open.spotify.com/" target="_blank">Link</a>                        
                        </div>
                    </div>
                    <div className="work">
                        <img src={WorkThree}  alt="work3"></img>
                        <div className="layer">
                            <h3>Online Shopping App</h3>
                            <p>Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
                            <a href="https://www.zalando.pl/" target="_blank">Link</a>                        
                        </div>
                    </div>
                </div>
                <a href="src/more.txt" target="_blank" className="btn">See more</a>
            </div>
        </div>
    )
}

export default Experience;
