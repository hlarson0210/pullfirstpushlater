import React from "react";
import "./style.css";
// Import Materialize
import M from "materialize-css";
import { AppContext } from "../../appContext";

class MyLibrary extends React.Component {
    static contextType = AppContext;
    // call token: this.context.token

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <main>
                <div className="container center">
                    <h1>My Library</h1>
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header">
                                <i className="material-icons">search</i>
                                Search for Games
                        </div>
                            <div className="row collapsible-body">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input placeholder="Settlers of Catan" id="first_name" type="text" className="validate"></input>
                                            <label for="first_name">Game</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s3">
                                            <input id="first_name" type="text" className="validate"></input>
                                            <label for="first_name">Minimum Players</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input id="last_name" type="text" className="validate"></input>
                                            <label for="last_name">Maximum Players</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input id="last_name" type="text" className="validate"></input>
                                            <label for="last_name">Minimum Playtime</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input id="last_name" type="text" className="validate"></input>
                                            <label for="last_name">Maximum Playtime</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" className="validate"></input>
                                            <label for="first_name">Ages</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" className="validate"></input>
                                            <label for="last_name">Rating</label>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col s6">
                                        <button className="btn waves-effect waves-light blue lighten-1" name="action">Search Games<i class="material-icons right">search</i>
                                        </button>
                                    </div>
                                    <div className="col s6">
                                        <button className="btn waves-effect waves-light blue lighten-1" name="action">Clear Search<i class="material-icons right">loop</i>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </li>
                    </ul>

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
}

export default MyLibrary