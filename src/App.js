import React from 'react';
import SideNav from './components/SideNav';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
    <SideNav></SideNav>
    <SignIn></SignIn>
    <Footer></Footer>
    </div>
  );
}

export default App;
