import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './components/Pages/MainPage';

function App() {
  // if I need to use hooks, lets add them here.
  return (
    <div className="App container-fluid"> {/* makes it a dark background */}
    <MainPage />


    </div>
  );
}

export default App;
