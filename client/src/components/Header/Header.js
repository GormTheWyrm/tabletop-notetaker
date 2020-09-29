
import React from 'react';
import '../../App.css';

/*
potential bug if resources have the same name property. (form name is resourceName)
*/
class Header extends React.Component {
// state should have 1 object per link in the header. bool: isActive pulled from App.js

  state = {
      homePage: false,
      characterPage: true
      // welcome page - log in
      // character/main page - build a character
      // setting page?
      //profile page - pick a character, setting, etc

  }
  handleNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  } //need a way for this function to determine which section is being changed...
// lets make this a modal instead!
  //onChange is a event for form fields...
  testFunction = (event) => {
    this.setState({});
    console.log(this.state);
    console.log(event.target.value);
  } //on save right now.... fix!
  render() {
    return (

      <div className="col-12 section">
  <span>Create Character </span> |
  <span> Select Character </span> |
  <span> Profile </span>
  {/* make this links to pages... 
  make these change the state and change which page shows... 
  need to push this to app.js state*/}
      </div>
    );
  }
}

export default Header;

