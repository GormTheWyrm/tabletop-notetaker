
import React from 'react';
import '../../SCSS/main.css';

/*
potential bug if resources have the same name property. (form name is resourceName)
*/
class Header extends React.Component {
  // state should have 1 object per link in the header. bool: isActive pulled from App.js

  state = {
    isLoggedIn: false,
    profileName: "not implemented",
    homePage: false,
    characterPage: true
    // welcome page - log in
    // character/main page - build a character
    // setting page?
    //profile page - pick a character, setting, etc


    // these should be props pushed in from app.js
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
      <div className="row section">
        <div className="col-sm-8 ">
          <span>Create Character </span> |
        <span> Select Character </span> |
        <span> Select Campaign </span> |
      </div>
        <div className="col-sm-4">
          {/* ternary t odisplay whether logged in */}
          {this.props.isLoggedIn ? <div><span>Log Out</span> | <span>{this.props.profileName}</span>
          </div>
            :
            <div><span>Log In</span> |
        <span> No Profile </span></div>}



          {/* may need to make this a different syle or move to the right side of screen... */}
          {/* make this links to pages... 
  make these change the state and change which page shows... 
  need to push this to app.js state*/}
        </div>
      </div>
    );
  }
}

export default Header;

