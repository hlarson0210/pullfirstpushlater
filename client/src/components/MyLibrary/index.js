import React from "react";
import M from "materialize-css";
import libraryAPI from "../../utils/API/gameLogic";
import LibraryCard from "../LibraryCard"
import { AppContext } from "../../appContext";
import "./style.css";


class MyLibrary extends React.Component {
    static contextType = AppContext;
    // call token: this.context.token

    componentDidMount() {
        M.AutoInit();
        // console.log("token", this.context.token);
        const gameObj = {
            name: this.state.name,
            token: this.context.token
        };
        libraryAPI.findGames(gameObj).then(response => {
            this.setState({ games: response }, () => console.log(this.state.games));
        }).catch(err => console.log(err))
    };

    state = {
        games: [],
        name: "",
        minPlayers: "",
        maxPlayers: "",
        minPlaytime: "",
        maxPlaytime: "",
        minAge: "",
        complexity: "",
        rating: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        }, () => console.log(this.state.name));
    };

    submitButton = (e) => {
        e.preventDefault();

        const gameObj = {
            name: this.state.name,
            minPlayers: this.state.minPlayers,
            maxPlayers: this.state.maxPlayers,
            minPlaytime: this.state.maxPlaytime,
            maxPlaytime: this.state.minPlaytime,
            minAge: this.state.minAge,
            complexity: this.state.complexity,
            rating: this.state.rating,
            token: this.context.token
        };

        libraryAPI.findGames(gameObj).then(response => {
            this.setState({ games: response }, () => console.log(this.state.games));
        }).catch(err => console.log(err))
    };

    clearButton = (e) => {
        e.preventDefault();

        this.setState({
            name: "",
            minPlayers: "",
            maxPlayers: "",
            minPlaytime: "",
            maxPlaytime: "",
            minAge: "",
            complexity: "",
            rating: ""
        })
    };

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
                                            <input
                                                value={this.state.name}
                                                name="name"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Name of Game</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s3">
                                            <input
                                                value={this.state.minPlayers}
                                                name="minPlayers"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Players</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input
                                                value={this.state.maxPlayers}
                                                name="maxPlayers"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Maximum Players</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input
                                                value={this.state.minPlaytime}
                                                name="minPlaytime"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                className="validate"
                                            >
                                            </input>
                                            <label>`Min Playtime (Minutes)`</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input
                                                value={this.state.maxPlaytime}
                                                name="maxPlaytime"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                className="validate"
                                            >
                                            </input>
                                            <label>`Max Playtime (Minutes)`</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.minAge}
                                                name="minAge"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Age</label>
                                        </div>
                                        <div className="input-field col s4">
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
                                            <label for="complexity">Complexity</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.rating}
                                                name="rating"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Rating</label>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col s6">
                                        <button className="btn waves-effect waves-light blue lighten-1" name="action" onClick={this.submitButton}>Search Games<i className="material-icons right">search</i>
                                        </button>
                                    </div>
                                    <div className="col s6">
                                        <button className="btn waves-effect waves-light blue lighten-1" name="action" onClick={this.clearButton}>Clear Search<i className="material-icons right">loop</i>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </li>
                    </ul>
                    <div className="row">
                        {this.state.games.map(item =>
                            <LibraryCard
                                name={item.name}
                                key={item.name}
                                minPlaytime={item.minPlaytime}
                                maxPlaytime={item.maxPlaytime}
                                minPlayers={item.minPlayers}
                                maxPlayers={item.maxPlayers}
                                minAge={item.minAge}
                                rating={item.rating.$numberDecimal}
                            >
                            </LibraryCard>
                        )}
                    </div>
                </div>
            </main>
        )
    }
}

export default MyLibrary;