import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/Hero';


function Home () {
    return(
        <main>
        <Hero backgroundImage="https://www.kidsdiscover.com/wp-content/uploads/2014/02/Games-People-Play.jpg">
            <h1 style={{marginLeft: "2rem"}}>Game App</h1>
            <h2 style={{marginLeft: "2rem"}}>Find your game</h2>
        </Hero>
        <div class="row">
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">My Libraries</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                <a href="#">Create a Library</a>
                    <Link
                        to="/mylibraries"
                        className={
                        window.location.pathname === "/mylibraries"
                        ? "nav-link active"
                        : "nav-link"
                        }
                        >
                        Search My Libraries
                    </Link>
                </div>
            </div>
            </div>
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">Explore Games</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <Link
                        to="/exploregames"
                        className={
                        window.location.pathname === "/exploregames"
                        ? "nav-link active"
                        : "nav-link"
                        }
                        >
                        Search All Games
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </main>
    )
}

export default Home;