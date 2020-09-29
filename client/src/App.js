import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './components/Pages/MainPage';
import Header from './components/Header/Header';
// import SinglePage from './components/Pages/SinglePage'

class App extends React.Component {
  // if I need to use hooks, lets add them here.

  render() {

    return (
      <div className="App container-fluid" > {/* makes it a dark background */}
        {/* <SinglePage /> */}
        <Header />
        < MainPage />
        {/* debating adding a SingleSectionPage in order to allow easier mobile use...
      ... or perhaps a "workingsection that takes up the full screen at the top of MainPage"
    */}

      </div >
    );
  }
}

export default App;
