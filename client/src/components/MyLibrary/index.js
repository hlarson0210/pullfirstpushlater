import React from "react";
import M from "materialize-css";
import libraryAPI from "../../utils/API/gameLogic";
import "./style.css";


class MyLibrary extends React.Component {
    componentDidMount() {
        M.AutoInit();

        //on load display games
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
        
        const userObj = {
            name: this.state.name,
            token: "b93b19ad-9b19-42a8-9d43-325e6c7b348b"  
        };
        console.log(this.state.name);
        console.log(userObj.token);
        libraryAPI.findGames(userObj).then(response => {
            this.setState({games: response}, () => console.log(this.state.games));
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
                                                type="text"
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
                                                type="text"
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
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Playtime</label>
                                        </div>
                                        <div className="input-field col s3">
                                            <input
                                                value={this.state.maxPlaytime}
                                                name="maxPlaytime"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Maximum Playtime</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.minAge}
                                                name="minAge"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Minimum Age</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input
                                                value={this.state.complexity}
                                                name="complexity"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                className="validate"
                                            >
                                            </input>
                                            <label>Complexity</label>
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