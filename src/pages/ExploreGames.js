import React, { Component } from "react";
import Input from '../components/Input/index..js';
import SearchButton from "../components/SearchButton";
import API from "../utils/API";
import ThumbNail from '../components/ThumbNail';
import { GameList, GameListItem } from "../components/GameList";
import { Container, Row, Col } from "../components/Grid";


class ExploreGames extends Component {
    state = {
    games: [],
    gameSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getGames(this.state.gameSearch)
        .then(res => this.setState({ games: res.data }))
        .catch(err => console.log(err));
    };
    render() {
        return(
            <main>
                <div className="container center">
                    <h1>Explore Games</h1>
                </div>
                <Container>
                    <Row>
                        <Col size="md-12">
                        <form>
                            <Container>
                            <Row>
                                <Col size="xs-9 sm-10">
                                <Input
                                    name="gameSearch"
                                    value={this.state.gameSearch}
                                    onChange={this.handleInputChange}
                                    placeholder="Search For a Game"
                                />
                                </Col>
                                <Col size="xs-3 sm-2">
                                <SearchButton
                                    onClick={this.handleFormSubmit}
                                    type="success"
                                    className="input-lg"
                                >
                                    Search
                                </SearchButton>
                                </Col>
                            </Row>
                            </Container>
                        </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                        {!this.state.games.length ? (
                            <h1 className="text-center">No Games to Display</h1>
                        ) : (
                            <GameList>
                            {this.state.games.map(game => {
                                return (
                                <GameListItem
                                    key={game.title}
                                    title={game.title}
                                    href={game.href}
                                    ThumbNail={game.ThumbNail}
                                />
                                );
                            })}
                            </GameList>
                        )}
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default ExploreGames;