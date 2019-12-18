import React from "react";

function LibraryCard(props) {
    return (
        // <div className="col s4">
        //     <div className="card blue-grey darken-1">
        //         <div className="card-content white-text">
        //             <span className="card-title">{props.name}</span>
        //             <p>Complexity: {props.complexity}</p>
        //             <p>Players: {props.minPlayers} to {props.maxPlayers}</p>
        //             <p>Play Time: {props.minPlaytime} to {props.maxPlaytime} minutes</p>
        //             <p>Minimum Age: {props.minAge}</p>
        //             <p>Rating: {props.rating}</p>
        //             <a href={props.rules} target="_blank" rel="noopener noreferrer">Link to Rules</a>
        //         </div>
        //     </div>
        // </div>
        <div className="card sticky-action col s4">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg">
                </img>
            </div>
            <div className="card-action">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
                <p><a href={props.rules}>Link to Rules</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
                <p>Complexity: {props.complexity}</p>
                <p>Players: {props.minPlayers} to {props.maxPlayers}</p>
                <p>Play Time: {props.minPlaytime} to {props.maxPlaytime} minutes</p>
                <p>Minimum Age: {props.minAge}</p>
                <p>Rating: {props.rating}</p>
                <a href={props.rules} target="_blank" rel="noopener noreferrer">Link to Rules</a>
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

    );
}

export default LibraryCard;