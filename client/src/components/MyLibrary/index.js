import React from "react";
import M from "materialize-css";
import libraryAPI from "../../utils/API/gameLogic";
import ls from 'local-storage';
import GamesDisplay from "../../components/GamesDisplay";
import { AppContext } from "../../appContext";
import "./style.css";


class MyLibrary extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        const userToken = ls.get("myGameLibrary_userToken");

        if (userToken) {
            this.setState({ token: userToken }, () => {
                const gameObj = {
                    name: this.state.name,
                    token: this.state.token
                };
                libraryAPI.findGames(gameObj).then(response => {
                    this.setState({ games: response });
                }).catch(err => console.log(err))
            });
        } else {
            alert("There was an error with your sign in, please log out and try again");
        }  
        
        M.AutoInit();
    };

    state = {
        games: [],
        name: "",
        numPlayers: "",
        minPlaytime: "",
        maxPlaytime: "",
        minAge: "",
        complexity: "",
        minRating: "",
        token: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    submitButton = event => {
        event.preventDefault();

        const elems = document.querySelectorAll('.collapsible');
        const instances = M.Collapsible.init(elems);
        const gameObj = {
            name: this.state.name,
            numPlayers: this.state.numPlayers,
            minPlaytime: this.state.maxPlaytime,
            maxPlaytime: this.state.minPlaytime,
            minAge: this.state.minAge,
            complexity: this.state.complexity,
            minRating: this.state.minRating,
            token: this.state.token
        };

        libraryAPI.findGames(gameObj).then(response => {
            this.setState({ games: response } );
            instances[0].close();
        }).catch(err => console.log(err));

    };

    clearButton = event => {
        event.preventDefault();

        this.setState({
            name: "",
            numPlayers: "",
            minPlaytime: "",
            maxPlaytime: "",
            minAge: "",
            complexity: "",
            minRating: "",
        })
    };

    render() {
        return (
            <main>
                <div className="container center">
                    <h1 id="myLibraryHeading">My Library</h1>
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
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.numPlayers}
                                                name="numPlayers"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                step="1"
                                                min="1"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Players</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.minPlaytime}
                                                name="minPlaytime"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                step="1"
                                                min="1"
                                                className="validate"
                                            >
                                            </input>
                                            <label>{`Min Playtime (Minutes)`}</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.maxPlaytime}
                                                name="maxPlaytime"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                step="1"
                                                min="1"
                                                className="validate"
                                            >
                                            </input>
                                            <label>{`Max Playtime (Minutes)`}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.minAge}
                                                name="minAge"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                step="1"
                                                min="1"
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
                                                value={this.state.minRating}
                                                name="minRating"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                step=".01"
                                                min="0"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Rating</label>
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
                        <GamesDisplay games={this.state.games}></GamesDisplay>
                    </div>
                </div>
            </main>
        )
    }
}

export default MyLibrary;