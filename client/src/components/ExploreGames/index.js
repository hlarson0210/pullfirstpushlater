import React from "react";
import keys from "../../utils/keys";
import GameCard from "../GameCard";
import SearchGames from "../SearchCard";
import bgaApiCall from "../../utils/bgaApiCall";
import axios from "axios";

let style = {
    "height": "85em",
    "display": "block",
    "overflow-y": "scroll",
    "transform": "translateY(0%)",
}

let container = {
    "width": "65%",
    "margin": "2%"
}
let container2 = {
    "width": "25%",
    "margin": "2%"
}

class ExploreGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            popularGames: [],
            searchGames: "",
            searchedGames: [],
            randomGame: []
        };
    }

    componentDidMount() {
        this.loadPopularGames();
        // fetch("https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=" + keys.id)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 popularGames: result.games,
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    queryName = () => {
        // bgaApiCall.search(this.state.searchGames)
        // .then(res => this.setState({ searchedGames: res.games, isLoaded: true }))
        // .catch(err => console.log(err));
        axios.get("https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=" + keys.id)
            .then(resp => resp.json())
            .then(
                result => {
                    this.setState({
                        popularGames: result.games,
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    loadPopularGames = () => {
        
        axios.get("https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=" + keys.id).then(
            result => {
                this.setState({
                    popularGames: result.data.games,
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
        bgaApiCall.getPopularGames().then(resp => console.log(resp));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { value, name } = event.target;


        // Updating the input's state
        this.setState({
            [name]: value
        }, () => { console.log(this.state.searchGames) })
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.searchGames) {
            alert(`Please enter the game you'd like to search`);
            this.setState({
                searchGames: ""
            });
        } else {
            // this.searchGames();
            this.queryName();

            this.setState({
                searchGames: "",
            });
        }



    };


    searchGames() {
        fetch("https://www.boardgameatlas.com/api/search?&ascending=false&limit=10&client_id=" + keys.id + "&name=" + this.state.searchGames)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.game) {
                        this.setState({
                            searchedGames: result.game
                        });
                    } else {
                        this.setState({
                            searchedGames: result.games
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    render() {
        const { error, isLoaded, popularGames, searchedGames } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="center"><h1>Loading...</h1></div>;
        } else {
            return (
                <main>

                    <div className="container left" style={container}>

                        <h1 className="center">Explore Games</h1>


                        <div className="row">
                            <div className="input-field col s8">
                                <input
                                    id="nameOfGame"
                                    type="text"
                                    value={this.state.searchGames}
                                    placeholder="search games here..."
                                    name="searchGames"
                                    onChange={this.handleInputChange}
                                    className="validate"></input>
                            </div>
                            <button
                                className="waves-effect waves-light btn searching blue lighten-1"
                                onClick={this.handleFormSubmit}
                            ><i className="material-icons left blue lighten-1">gesture</i>Search</button>
                        </div>
                        <div><h4 className="center">Searched Games</h4></div>

                        <div className="row" style={style}>
                            <div className="col s12">
                                {searchedGames.map(item =>
                                    <SearchGames
                                        name={item.name}
                                        key={item.name}
                                        price={item.price}
                                        rating={item.average_user_rating.toFixed(2)}
                                        minplaytime={item.min_playtime}
                                        maxplaytime={item.max_playtime}
                                        minage={item.min_age}
                                        minplayers={item.min_players}
                                        maxplayers={item.max_players}
                                        officialsite={item.official_url}
                                        description={item.description_preview}
                                        image={item.images.small}
                                        rules={item.rules_url}
                                    ></SearchGames>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="container right" style={container2}>
                        <div><h4 className="center">Popular Games</h4></div>
                        <div className="row" style={style}>
                            {/* <div className="col s12"> */}
                            <ul className="collection">
                                {popularGames.map(item =>
                                    <GameCard
                                        name={item.name}
                                        key={item.name}
                                        price={item.price}
                                        rating={item.average_user_rating.toFixed(2)}
                                        minplaytime={item.min_playtime}
                                        maxplaytime={item.max_playtime}
                                        minage={item.min_age}
                                        minplayers={item.min_players}
                                        maxplayers={item.max_players}
                                        officialsite={item.official_url}
                                        description={item.description_preview}
                                        image={item.images.thumb}
                                        rules={item.rules_url}
                                    ></GameCard>
                                )}
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                </main>
            );
        }
    }
}

export default ExploreGames
