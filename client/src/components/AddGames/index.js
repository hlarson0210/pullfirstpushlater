import React from "react";
import gameLogic from "../../utils/API/gameLogic";
import "./style.css";
import { AppContext } from "../../appContext";

class AddGames extends React.Component {
    static contextType = AppContext;
    // call token: this.context.token
    
    state = {
        error: null,
        userToken: "",
        gameName: "",
        minPlayers: null,
        maxPlayers: null,
        minPlaytime: null,
        maxPlaytime: null,
        minAge: null,
        rating: null,
        rules: "",
        image: "",
        complexity: ""
    }

    handleInputChange = event => {

        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
        const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const needsWholeNums = ["minPlayers", "maxPlayers", "minPlaytime", "maxPlaytime", "minAge"];
    
        if (needsWholeNums.includes(name)) {
            if (!numArr.includes(value)) {
                alert("Only whole numbers allowed");
                return
              }
        }
    
        // Updating the input's state
        this.setState({
          [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let badForm = false;

        const gameObj = {
            name: this.state.gameName,
            minPlayers: this.state.minPlayers,
            maxPlayers: this.state.maxPlayers,
            minPlaytime: this.state.minPlaytime,
            maxPlaytime: this.state.maxPlaytime,
            minAge: this.state.minAge,
            rating: this.state.rating,
            rules: this.state.rules,
            image: this.state.image,
            complexity: this.state.complexity,
            token: this.state.userToken
        }

        if (!gameObj.name) {
            alert(`Please enter a name for your game`);
            return
        } else if (!gameObj.minPlayers) {
            alert(`Please enter a minimum number of players`);
            return
        } else if (!gameObj.minPlaytime) {
            alert(`Please enter a minimum playtime`);
            return
        } else if (!gameObj.minAge) {
            alert(`Please enter a minimum age`);
            return
        }

        gameLogic.addGame(gameObj);
    };

    render () {
        return (
            <main>
                <div className="container center">
                    <h1>Add Games</h1>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Name of Game" id="gameName" type="text" name="gameName" onChange={this.handleInputChange} value={this.state.gameName} className="validate"></input>
                                    <label for="gameName">Name of Game</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s3">
                                    <input id="minPlayers" type="number" step="any" name="minPlayers" onChange={this.handleInputChange} value={this.state.minPlayers} className="validate"></input>
                                    <label for="minPlayers">Minimum Players</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="maxPlayers" type="number" step="any" name="maxPlayers" onChange={this.handleInputChange} value={this.state.maxPlayers} className="validate"></input>
                                    <label for="maxPlayers">Maximum Players</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="minPlaytime" type="number" step="any" name="minPlaytime" onChange={this.handleInputChange} value={this.state.minPlaytime} className="validate"></input>
                                    <label for="minPlaytime">Minimum Playtime</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="maxPlaytime" type="number" step="any" name="maxPlaytime" onChange={this.handleInputChange} value={this.state.maxPlaytime} className="validate"></input>
                                    <label for="maxPlaytime">Maximum Playtime</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s3">
                                    <input id="minAge" type="number" step="any" name="minAge" onChange={this.handleInputChange} value={this.state.minAge} className="validate"></input>
                                    <label for="minAge">Minimum Age</label>
                                </div>
                                <div className="input-field col s3">
                                    <select id="complexity" name="complexity" onChange={this.handleInputChange} value={this.state.complexity} className="validate">
                                        <option value="" disabled selected>Choose the complexity</option>
                                        <option value="Light">Light</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Heavy">Heavy</option>
                                    </select>
                                    <label for="complexity">Complexity</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="rating" type="number" step="any" name="rating" onChange={this.handleInputChange} value={this.state.rating} className="validate"></input>
                                    <label for="rating">Rating</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="image" type="text" name="image" onChange={this.handleInputChange} value={this.state.image} className="validate"></input>
                                    <label for="image">Image URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Input Rules here</h4>
                                <div className="input-field col s12">
                                    <textarea id="rules" palceholder="Rules text goes here" name="rules" onChange={this.handleInputChange} value={this.state.rules} className="materialize-textarea"></textarea>
                                    <label for="rules">Rules</label>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <button className="btn waves-effect waves-light blue lighten-1" name="action">Add Game<i class="material-icons right">add_circle</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        )
    }  
}

export default AddGames;