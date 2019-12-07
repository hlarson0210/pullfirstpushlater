import React from "react";
import API from "../utils/game-api.js";
import "./style.css";

function ExploreGames() {
    return (
        <main>
            <div className="container center">
                <h1>Explore Games</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nameOfGame" type="text" className="validate"></input>
                        <label className="active" for="first_name2">Search for game</label>
                    </div>
                    <a className="waves-effect waves-light btn searching blue lighten-1"><i className="material-icons left blue lighten-1">gesture</i>Search</a>
                </div>
                <div className="row">
                    <div id="api-search" className="col s12"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <a className="waves-effect waves-light btn fartbox blue lighten-1"><i className="material-icons left blue lighten-1">loop</i>Randomize Me!</a>
                </div>
                <div className="row">
                    <div id="randomize" className="col s12"></div>
                </div>
                <div className="divider"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div id="api" className="col s12"></div>
                </div>
            </div>
        </main>
    )
}

export default ExploreGames;