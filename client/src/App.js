import React from 'react';
import MainPage from './Pages/MainPage';
import Header from './components/Header/Header';
// import SinglePage from './components/Pages/SinglePage'
import LoginPage from './Pages/LoginPage';
import WelcomePage from './Pages/WelcomePage';


/*
I will need to put most of my login in here. App will call all of the different functions...
...This will also allow me to switch layouts with pages while keeping the app and character logic in app.js...
!! I need to go through and fix my tempObjects and NewStates so that they are copies of MainCharacter and resource instead of references.
How? json?
*/


class App extends React.Component {
  // if I need to use hooks, lets add them here.

  constructor(props) {
    super(); //super(props); 

    this.state = {
      isLoggedIn: false,
      profileName: null,
      isCharacterSelected: false,
      selectedCharacter: null
      //this should be a character id form database
      //could add secondary characters if want to show party hp and etc... beyond scope of this project

      , //characterHeader
      error: null,
      isLoaded: false,
      mainCharacter: {
        editName: false,
        characterName: "New Character",
        resource: [{
          resourceName: "HP",
          min: 0,
          max: 15,
          current: 15,
          addValue: 0,
          isEdit: false
        },
        {
          resourceName: "Stamina",
          min: 0,
          max: 15,
          current: 7,
          addValue: 0,
          isEdit: false

        }
        ]
      },

      inputValue1: 0, //test to see if I can delete this
      editName: false,
      editResource: false,
      resourceModalOpen: false,
      workingResource: {
        resourceName: "New Resource",
        min: 0,
        max: 0,
        current: 0,
        addValue: 0,
        isEdit: false
      }

    }; //end of state

  }
  loginFunction = (e) => {
    console.log("temporary login function");
    this.setState({ isLoggedIn: true });

  }
  SelectACharacter = (e) => {

    this.setState({ isCharacterSelected: true, selectedCharacter: "testCharacter" });
    console.log(this.state);
    //error; isCharacterSelecteled is false in this console.log... probably not updating before console.log... happens in other function too
  }
  CreateACharacter = (e) => {

    this.setState({ isCharacterSelected: true, selectedCharacter: "NewCharacter" });
    console.log(this.state);
    // this needs to create a character in database
  }

  handleResourceChange = (event, index) => {  // this allows addValue to be changed within each resource. Plus and minus arrows for HP and etc
    //this was moved from character header - now functions
    event.preventDefault();
    const target = event.target;  //this is a string 
    const value = parseInt(target.value); //this should be an integer now
    let tempObject = this.state.mainCharacter.resource;
    tempObject[index].addValue = value;
    this.setState({
      resource: tempObject
    });
    //does not save beyond state
  }


  handleAddition = (event, index) => {    // this handles math within the resource.
    event.preventDefault();
    let current = this.state.mainCharacter.resource[index].current;
    let inputValue = this.state.mainCharacter.resource[index].addValue
    let newValue = current + inputValue;
    let maxValue = this.state.mainCharacter.resource[index].max;
    let minValue = this.state.mainCharacter.resource[index].min;
    if (isNaN(newValue)) {
      newValue = current;
    } //this may not be an issue any more
    if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    let tempObject = this.state.mainCharacter.resource;
    tempObject[index].current = newValue;
    this.setState({ resource: tempObject });

  }
  handleSubtraction = (event, index) => {    // this handles math within the resource.
    event.preventDefault();
    let current = this.state.mainCharacter.resource[index].current;
    let inputValue = this.state.mainCharacter.resource[index].addValue
    let newValue = current - inputValue;
    let maxValue = this.state.mainCharacter.resource[index].max;
    let minValue = this.state.mainCharacter.resource[index].min;
    if (newValue === NaN) {
      newValue = 0;
    }
    if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    let tempObject = this.state.mainCharacter.resource;
    tempObject[index].current = newValue;
    this.setState({ resource: tempObject });

  }


  handleSaveCharacter = (event) => {
    // this should call api...
    console.log("this will call api... eventually");
    console.log(this.state);
    // need to this data... but should make sure it fits needed format first...
    let outBoundData = this.state.mainCharacter;
    console.log("outBoundData:");
    console.log(outBoundData);

  }  //end save function

  handleNameEdit = () => {  // this toggles a form and changes the name based on changes to that form
    //maybe change this later to make modal pop up
    console.log('handle name edit');
    console.log(this.state.mainCharacter.editName);
    let newState = this.state.mainCharacter;
    newState.editName = !newState.editName;
    console.log(newState.editName);
    this.setState({ editName: newState })
    //works but need to save name and handle changes...
  }

  handleNameChange = (event) => {
    const target = event.target;
    // console.log(event.target.value);
    const value = target.value; //separate function deals with math because these leaves a string
    let newState = this.state.mainCharacter;
    newState.characterName = value;
    this.setState({
      mainCharacter: newState
    });
  } // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

  handleNewResource = (event) => { // this creates a new resource, adding a blank resource to state
    console.log("this will add a new resource");
    // modal would be cooler...
    let newState = this.state.mainCharacter;
    let newResource = {
      resourceName: "New Resource",
      min: 0,
      max: 0,
      current: 0,
      addValue: 0,
      isEdit: true
    }
    let tempObject = [...this.state.mainCharacter.resource];
    tempObject.push(newResource);
    newState.resource = [...tempObject];

    console.log(newState);
    // this.setState({ resource: tempObject });
    // this would be better if input came from a modal...
    this.setState({ mainCharacter: newState })
    //use concat!
  }

  handleResourceToggle = (event, index) => {  //toggles resource form on and off
    let newBool = !this.state.mainCharacter.resource[index].isEdit;
    let newState = this.state.mainCharacter;
    newState.resource[index].isEdit = newBool;
    this.setState({ mainCharacter: newState });
  }



  handleResourceEdit = (event, index) => {  // handles changes to the expanded resource form.
    const target = event.target;
    const value = target.value; //may need to parse int... make a new function for numbers! handleNumberChange.... handleAddition works here?
    let tempObject = [...this.state.mainCharacter.resource]; // need to fix this - copy array properly


    if (target.name === "resourceName") {
      tempObject[index].resourceName = value;
    } else if (target.name === "min") {
      tempObject[index].min = parseInt(value);
    } else if (target.name === "max") {
      tempObject[index].max = parseInt(value);
      // console.log(this.state.mainCharacter.resource[0].max);
      //this shows that state is changing when tempObject changes.. this is bad. But it works for now. 
      //Still need to call setState at end so that page refreshes...
    } else if (target.name === "current") {
      tempObject[index].current = parseInt(value);
    } else {
      console.log("error: no change"); //I dont think this is possible as an error but it should just save the current state
    }
    if (tempObject[index].max < tempObject[index].min) {
      tempObject[index].max = tempObject[index].min;
      tempObject[index].current = tempObject[index].min;
    }
    if (tempObject[index].current > tempObject[index].max) {
      tempObject[index].current = tempObject[index].max
    }
    if (tempObject[index].current < tempObject[index].min) {
      tempObject[index].current = tempObject[index].min
    }
    this.setState({ resource: tempObject });
  }
 


  handleResourceDelete = (event, index) => {  //toggles resource form on and off
    let newArray = [];
    // console.log("resource delete");
    for (let i = 0; i < this.state.mainCharacter.resource.length; i++) {
      if (index !== i) { newArray.push(this.state.mainCharacter.resource[i]); }

    }

    let newState = this.state.mainCharacter;
    newState.resource = [...newArray];
    this.setState({ mainCharacter: newState });
  }



 //WORKING:
  //end working


  render() {

    //need to set up axios call for database profile info
    //need to set up react-router-dom to redirect to various "pages" bases on links...
    //need to figure out a way to share with other people... perhaps via a special "units" section that calls api for friends cahracterHeader info- read only!
    //GM v player v specator...

    // let myResources = [];
    // for (let i = 0; i < this.state.mainCharacter.resource.length; i++) { myResources.push(this.state.resource[i]) };

    return (
      <div className="app container-fluid" > {/* makes it a dark background */}
        {/* <SinglePage /> */}
        <Header isLoggedIn={this.state.isLoggedIn} profileName={this.state.profileName} />
        {/* main page needs to have access to character data... meaning a main character needs to exist in app. Other characters may be pulled into specific sections as needed...
         WELCOME PAGE allows player to log in and select a character
         ...maybe change that so that it is an option on main page
         ...unless we want ability to change between page setups...
         ..header should allow character selecting!
         */}
        {this.state.isCharacterSelected ?
          <MainPage mainCharacter={this.state.mainCharacter}
            handleResourceChange={this.handleResourceChange}
            handleAddition={this.handleAddition}
            handleSubtraction={this.handleSubtraction}
            handleSaveCharacter={this.handleSaveCharacter}
            handleNameEdit={this.handleNameEdit}
            handleNameChange={this.handleNameChange}
            handleNewResource={this.handleNewResource}
            handleResourceToggle={this.handleResourceToggle}
            handleResourceEdit={this.handleResourceEdit}
            handleResourceDelete={this.handleResourceDelete}
          // mainCharName={this.state.characterName} resource={myResources}
          //I dont think I can send this array through here...

          // error: null,
          // isLoaded: false,
          // characterName: "Test Character1",
          // resource: [{
          //   resourceName: "HP",
          //   min: 0,
          //   max: 15,
          //   current: 15,
          //   addValue: 0,
          //   isEdit: false
          // },
          // {
          //   resourceName: "Stamina",
          //   min: 0,
          //   max: 15,
          //   current: 7,
          //   addValue: 0
          // }
          // ],
          // inputValue1: 0, //test to see if I can delete this
          // editName: false,
          // editResource: false,
          // resourceModalOpen: false,
          // workingResource: {
          //   resourceName: "New Resource",
          //   min: 0,
          //   max: 0,
          //   current: 0
          // }

          />
          :
          <WelcomePage login={this.loginFunction} isLoggedIn={this.state.isLoggedIn} characterSelect={this.SelectACharacter} characterCreate={this.CreateACharacter} />}

        {/* debating adding a SingleSectionPage in order to allow easier mobile use...
      ... or perhaps a "workingsection that takes up the full screen at the top of MainPage"
    */}

      </div >
    );
  }
}

export default App;
