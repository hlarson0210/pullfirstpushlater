import React from "react";
import ThumbNail from '../components/ThumbNail';

function MyLibraries () {
    return(
        <main>
            <div className="container center">
                <h1>My Libraries</h1>
            </div>
            <ThumbNail src={ThumbNail} />
        </main>
    )
}

export default MyLibraries;