import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import MyLibraries from './components/MyLibraries';
import ExploreGames from './components/ExploreGames';
import SideNav from './components/SideNav';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <AppContainer>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/MyLibraries" component={MyLibraries} />
          <Route exact path="/ExploreGames" component={ExploreGames} />
        </AppContainer>
        <Footer />
      </div>
    </Router>
  );

}

export default App;