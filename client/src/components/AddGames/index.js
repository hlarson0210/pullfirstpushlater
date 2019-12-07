import React from "react";
import "./style.css";

function AddGames() {
    return (
        <main>
            <div className="container center">
                <h1>Add Games</h1>
                <div className="row">
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
                        <div className="row">
                            <h4>Input Rules here</h4>
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Rules</label>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <button className="btn waves-effect waves-light blue lighten-1" name="action">Add Games<i class="material-icons right">add_circle</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AddGames;