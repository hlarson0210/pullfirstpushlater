import React, { Component } from "react";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ExploreGames from "./pages/ExploreGames";
import MyLibraries from "./pages/MyLibraries";

class GameApp extends Component {
  state = {
    currentPage: "SignIn"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "SignIn") {
      return <SignIn />;
    } else if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "ExploreGames") {
      return <ExploreGames />;
    } else {
      return <MyLibraries />;
    }
  };

  render() {
    return (
      <div>
        <SideNav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default GameApp;
