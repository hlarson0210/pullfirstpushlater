import React from "react";
import NoGames from "../../pages/NoGames";
import LibraryCard from "../../pages/LibraryCard";
import { AppContext } from "../../appContext";

class GamesDisplay extends React.Component {
    static contextType = AppContext;

    checkDelete = gameID => {
        return this.props.onDelete(gameID);
    }

    checkUpdate = gameID => {
        return this.props.onUpdate(gameID);
    }

    render() {
        if (this.props.games.length === 0) {
            return <NoGames />;
        }
        return this.props.games.map((item, index) =>
            <LibraryCard
                name={item.name}
                key={index}
                id={item._id}
                minPlaytime={item.minPlaytime}
                maxPlaytime={item.maxPlaytime}
                minPlayers={item.minPlayers}
                maxPlayers={item.maxPlayers}
                minAge={item.minAge}
                rating={item.rating.$numberDecimal}
                complexity={item.complexity}
                onUpdate={this.checkUpdate}
                onDelete={this.checkDelete}
            />
        )
    }
}

export default GamesDisplay;