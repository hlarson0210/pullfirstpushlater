import React from "react";

function LibraryCard(props) {
    return (
        <div className="card col s4" style={{ marginRight: '1%', marginLeft: '1%', width: '31%', height:'375px' }}>
            <div className="card-image waves-effect waves-block waves-light center">
                <img className="activator" src={props.image} style={{ padding: '10px 0 0 0', width: '200px', height: '200px', marginLeft: 'auto', marginRight: 'auto' }}></img>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
                <p><a href={props.rules} target="_blank" rel="noopener noreferrer">Link to Rules</a></p>
            </div>
            <div className="card-reveal">
                <div>
                    <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
                    <p>Complexity: {props.complexity}</p>
                    <p>Players: {props.minPlayers} to {props.maxPlayers}</p>
                    <p>Play Time: {props.minPlaytime} to {props.maxPlaytime} minutes</p>
                    <p>Minimum Age: {props.minAge}</p>
                    <p>Rating: {props.rating}</p>
                </div>
                <div >
                    <button
                        onClick={() => props.onUpdate(props.id)}
                        data-id={props.id}
                        className="btn waves-effect waves-light blue-grey lighten-3 col s4"
                        name="action"
                        style = {{margin: '10% 15% 0 7%'}}
                    ><i className="material-icons">edit</i>
                    </button>
                    <button
                        onClick={() => props.onDelete(props.id)}
                        data-id={props.id}
                        className="btn waves-effect waves-light blue-grey lighten-3 col s4"
                        name="action"
                        style = {{margin: '10% 0 0 0'}}
                    ><i className="material-icons">delete</i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default LibraryCard;