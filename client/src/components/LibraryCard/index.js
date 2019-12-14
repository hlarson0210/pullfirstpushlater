import React from "react";
import M from "materialize-css";


class LibraryCard extends React.Component {
    constructor (props) {
        super(props);
    } 
    
    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
            <div className="col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.name}</span>
                        <p>Complexity: {this.props.complexity}</p>
                        <p>Amount of Players: {this.props.minPlayers} to {this.props.maxPlayers}</p>
                        <p>Play Time: {this.props.minPlaytime} minutes to {this.props.maxPlaytime}</p>
                        <p>Minimum Age: {this.props.minAge}</p>
                        <p>Rating: {this.props.rating}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LibraryCard;