import React from "react";

function LibraryCard(props) {
    return (
        <div className="col s4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.name}</span>
                    <p>Complexity: {props.complexity}</p>
                    <p>Players: {props.minPlayers} to {props.maxPlayers}</p>
                    <p>Play Time: {props.minPlaytime} to {props.maxPlaytime} minutes</p>
                    <p>Minimum Age: {props.minAge}</p>
                    <p>Rating: {props.rating}</p>
                    <button
                        data-id={props.id}
                        className="btn waves-effect waves-light blue-grey lighten-3"
                        name="action"
                    ><i className="material-icons">edit</i>
                    </button>
                    <button
                        data-id={props.id}
                        className="btn waves-effect waves-light blue-grey lighten-3"
                        name="action"
                    ><i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LibraryCard;