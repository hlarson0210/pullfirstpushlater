import React from "react";
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
        <li>
          <a href="#mylibraries"
          onClick={() => props.handlePageChange("MyLibraries")}
          className={props.currentPage === "MyLibraries" ? "nav-link active" : "nav-link"}>
          <i className="material-icons">cloud</i>
            My Libraries
          </a>
        </li>
        <li>
          <a href="#exploregames"
          onClick={() => props.handlePageChange("ExploreGames")}
          className={props.currentPage === "ExploreGames" ? "nav-link active" : "nav-link"}>
          <i className="material-icons">cloud</i>
            Explore Games
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons medium">menu</i></a>
    </header>
  );
}

export default SideNav;