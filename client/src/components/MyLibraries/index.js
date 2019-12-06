import React from "react";
import "./style.css";

function MyLibraries() {
    return (
        <main>
            <div className="container center">
                <h1>My Library</h1>

                <div className="row">
                    <div className="col s4">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="something"></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://www.youtube.com/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="something"></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://www.youtube.com/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div><div className="col s4">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt="something"></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://www.youtube.com/">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyLibraries