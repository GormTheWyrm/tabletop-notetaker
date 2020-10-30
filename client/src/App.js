import React from 'react';
// import logo from './logo.svg';

import MainPage from './Pages/MainPage';
import Header from './components/Header/Header';
// import SinglePage from './components/Pages/SinglePage'

class App extends React.Component {
  // if I need to use hooks, lets add them here.

  constructor(props) {
    super(); //super(props); 

    this.state = {
      isLoggedIn: false,
      profileName: null

    };

}

  render() {

//need to set up axios call for database profile info
//need to set up react-router-dom to redirect to various "pages" bases on links...
//need to figure out a way to share with other people... perhaps via a special "units" section that calls api for friends cahracterHeader info- read only!
//GM v player v specator...


    return (
      <div className="app container-fluid" > {/* makes it a dark background */}
        {/* <SinglePage /> */}
        <Header />
        <MainPage />
        {/* debating adding a SingleSectionPage in order to allow easier mobile use...
      ... or perhaps a "workingsection that takes up the full screen at the top of MainPage"
    */}

      </div >
    );
  }
}

export default App;
