import React from "react";
import NoGames from "../../pages/NoGames";
import LibraryCard from "../../pages/LibraryCard";
import M from "materialize-css";


class GamesDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.AutoInit();
    };

    render() {
        if (this.props.games.length === 0) {
            return <NoGames />;
        }
        return this.props.games.map(item =>
            <LibraryCard
                name={item.name}
                minPlaytime={item.minPlaytime}
                maxPlaytime={item.maxPlaytime}
                minPlayers={item.minPlayers}
                maxPlayers={item.maxPlayers}
                minAge={item.minAge}
                rating={item.rating.$numberDecimal}
            />
        )
    }
}

export default GamesDisplay;

