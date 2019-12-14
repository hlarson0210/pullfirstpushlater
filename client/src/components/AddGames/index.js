import React from "react";
import gameLogic from "../../utils/API/gameLogic";
import ls from 'local-storage';
import { AppContext } from "../../appContext";
import "./style.css";

class AddGames extends React.Component {
    static contextType = AppContext;
    
    componentDidMount() {
        const userToken = ls.get("myGameLibrary_userToken");

        if (userToken) {
            this.setState({token: userToken});
        } else {
            alert("There was an error with your sign in, please log out and try again");
        }
      }

    state = {
        error: null,
        gameName: "",
        minPlayers: null,
        maxPlayers: null,
        minPlaytime: null,
        maxPlaytime: null,
        minAge: null,
        rating: null,
        rules: "",
        image: "",
        complexity: "",
        token: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

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
            token: this.state.token
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

    render() {
        return (
            <main>
                <div className="container center">
                    <h1>Add Games</h1>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="gameName"
                                        type="text"
                                        name="gameName"
                                        onChange={this.handleInputChange}
                                        value={this.state.gameName}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="gameName">Name of Game</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s3">
                                    <input
                                        id="minPlayers"
                                        type="number"
                                        min="1"
                                        step="1"
                                        name="minPlayers"
                                        onChange={this.handleInputChange}
                                        value={this.state.minPlayers}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="minPlayers">Minimum Players</label>
                                </div>
                                <div className="input-field col s3">
                                    <input
                                        id="maxPlayers"
                                        type="number"
                                        min="0"
                                        step="1"
                                        name="maxPlayers"
                                        onChange={this.handleInputChange}
                                        value={this.state.maxPlayers}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="maxPlayers">Maximum Players</label>
                                </div>
                                <div className="input-field col s3">
                                    <input
                                        id="minPlaytime"
                                        type="number"
                                        min="1"
                                        step="1"
                                        name="minPlaytime"
                                        onChange={this.handleInputChange}
                                        value={this.state.minPlaytime}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="minPlaytime">Minimum Playtime</label>
                                </div>
                                <div className="input-field col s3">
                                    <input
                                        id="maxPlaytime"
                                        type="number"
                                        min="1"
                                        step="1"
                                        name="maxPlaytime"
                                        onChange={this.handleInputChange}
                                        value={this.state.maxPlaytime}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="maxPlaytime">Maximum Playtime</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s3">
                                    <input
                                        id="minAge"
                                        type="number"
                                        min="1"
                                        step="1"
                                        name="minAge"
                                        onChange={this.handleInputChange}
                                        value={this.state.minAge}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="minAge">Minimum Age</label>
                                </div>
                                <div className="input-field col s3">
                                    <select
                                        id="complexity"
                                        name="complexity"
                                        onChange={this.handleInputChange}
                                        value={this.state.complexity}
                                        className="validate"
                                    >
                                        <option value="" disabled selected>Choose the complexity</option>
                                        <option value="Light">Light</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Heavy">Heavy</option>
                                    </select>
                                    <label htmlFor="complexity">Complexity</label>
                                </div>
                                <div className="input-field col s3">
                                    <input
                                        id="rating"
                                        type="number"
                                        min="0"
                                        step=".01"
                                        name="rating"
                                        onChange={this.handleInputChange}
                                        value={this.state.rating}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="rating">Rating</label>
                                </div>
                                <div className="input-field col s3">
                                    <input
                                        id="image"
                                        type="text"
                                        name="image"
                                        onChange={this.handleInputChange}
                                        value={this.state.image}
                                        className="validate"
                                    >
                                    </input>
                                    <label htmlFor="image">Image URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Input Rules here</h4>
                                <div className="input-field col s12">
                                    <textarea
                                        id="rules"
                                        palceholder="Rules text goes here"
                                        name="rules"
                                        onChange={this.handleInputChange}
                                        value={this.state.rules}
                                        className="materialize-textarea"
                                    >
                                    </textarea>
                                    <label htmlFor="rules">Rules</label>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <button
                                    className="btn waves-effect waves-light blue lighten-1"
                                    name="action"
                                    onClick={this.handleFormSubmit}>Add Game<i className="material-icons right">add_circle</i>
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