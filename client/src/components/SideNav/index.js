import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav(props) {
  return (
    <header>
      <ul id="slide-out" className="sidenav blue lighten-1">
        <li>
          <div className="user=view">
            <a href="#user"><img className="circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img></a>
            <a href="#name"><span className="name white-text">John Doe</span></a>
          </div>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li><a className="subheader">Subheader</a></li>
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign In
            </Link>
        </li>
        <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
        </li>
        <li className="nav-item">
            <Link
              to="/mylibraries"
              className={
                window.location.pathname === "/mylibraries"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Libraries
            </Link>
        </li>
        <li className="nav-item">
            <Link
              to="/exploregames"
              className={
                window.location.pathname === "/exploregames"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Explore Games
            </Link>
        </li>

      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons medium">menu</i></a>
    </header>
  );
}

export default SideNav;