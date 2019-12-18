import React from "react";
import gameLogic from "../../utils/API/gameLogic";
import ls from 'local-storage';
import M from "materialize-css";
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

        M.AutoInit();
        M.updateTextFields();
    }

    state = {
        error: null,
        gameName: this.context.gameName,
        minPlayers: this.context.minPlayers,
        maxPlayers: this.context.maxPlayers,
        minPlaytime: this.context.minPlaytime,
        maxPlaytime: this.context.maxPlaytime,
        minAge: this.context.minAge,
        rating: this.context.rating,
        rules: this.context.rules,
        image: this.context.image,
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
        
        if (this.context.userId) {
            gameObj._id = this.context._id;
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

        if (!gameObj.maxPlaytime) {
            gameObj.maxPlaytime = gameObj.minPlaytime;
        }

        if (!gameObj.maxPlayers) {
            gameObj.maxPlayers = gameObj.minPlayers;
        }

        gameLogic.saveGame(gameObj).then(resp => {
            this.context.update({
                gameName: "",
                minPlayers: "",
                maxPlayers: "",
                minPlaytime: "",
                maxPlaytime: "",
                minAge: "",
                rating: "",
                rules: "",
                image: "",
                complexity: ""
            });
            this.setState({
                gameName: "",
                minPlayers: "",
                maxPlayers: "",
                minPlaytime: "",
                maxPlaytime: "",
                minAge: "",
                rating: "",
                rules: "",
                image: "",
                complexity: ""
            });
        });
        
        M.updateTextFields();
    };

    render() {
        return (
            <main>
                <div className="container center">
                    <h1>Add Games</h1>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s3 active">
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
                                <div className="input-field col s12 active">
                                    <textarea
                                        id="rules"
                                        palceholder="Rules text goes here"
                                        name="rules"
                                        onChange={this.handleInputChange}
                                        value={this.state.rules}
                                        className="materialize-textarea"
                                    >
                                    </textarea>
                                    <label htmlFor="rules">Rules URL</label>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <button
                                    className="btn waves-effect waves-light blue lighten-1"
                                    name="action"
                                    onClick={this.handleFormSubmit}>Save Game<i className="material-icons right">add_circle</i>
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