import React from 'react';
import '../SCSS/main.css';
import Resource from '../components/Resource';

//this app very much relies on MongoDB because the resources can change per character.
//A SQL version would probably have a set number of resources per class, with the max, min and current values changing per character.


/*
potential bug if resources have the same name property. (form name is resourceName)
*/

// I need to initialize state with data from character database...
//current errors:
//  cannot manually put in the subtraction sign
// solutions? add a subtract button.


class CharacterHeader extends React.Component {
  constructor(props) {
    super(); //super(props); 
    this.state = {
      error: null,
      isLoaded: false,
      characterName: "Test Character1",
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
        addValue: 0
      }
      ],
      inputValue1: 0,
      editName: false,
      editResource: false,
      resourceModalOpen: false,
      workingResource: {
        resourceName: "New Resource",
        min: 0,
        max: 0,
        current: 0
      }
    }
    this.handleAddition = this.handleAddition.bind(this);
    //binding not needed if define funcitons with arrow functions!
    //which also means the constructor may not be needed...
  }

  //init function to pull data from database.


  handleResourceChange = (event, index) => {  // this allows subcomponent numbers to be changed by the user
    event.preventDefault();
    const target = event.target;  //this is a string 
    const value = parseInt(target.value); //this should be an integer now
    let tempObject = this.state.resource;
    tempObject[index].addValue = value;
    this.setState({
      resource: tempObject
    });

  }

  handleAddition = (event, index) => {    // this handles math within the resource.
    event.preventDefault();
    let current = this.state.resource[index].current;
    let inputValue = this.state.resource[index].addValue
    let newValue = current + inputValue;
    let maxValue = this.state.resource[index].max;
    let minValue = this.state.resource[index].min;
    if (newValue === NaN) {
      newValue = 0;
    }
    if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    let tempObject = this.state.resource;
    tempObject[index].current = newValue;
    this.setState({ resource: tempObject });

  }
  handleSubtraction = (event, index) => {    // this handles math within the resource.
    event.preventDefault();
    let current = this.state.resource[index].current;
    let inputValue = this.state.resource[index].addValue
    let newValue = current - inputValue;
    let maxValue = this.state.resource[index].max;
    let minValue = this.state.resource[index].min;
    if (newValue === NaN) {
      newValue = 0;
    }
    if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    let tempObject = this.state.resource;
    tempObject[index].current = newValue;
    this.setState({ resource: tempObject });

  }


  handleSave = (event) => {
    //currentError: outbound data not the same as state.

    // this should call api...
    //current issue: outbound data is not overwritten with state.
    console.log("this will call api... eventually");
    console.log(this.state);
    // need to this data... but should make sure it fits needed format first...
    let outBoundData =
    // {characterName: "", resource:[{resourceName: "", min: 0, max: 0}]};

    {
      characterName: "",
      resource: [{
        resourceName: "",
        min: 0,
        max: 0,
        current: 0
      },
      {
        resourceName: "0",
        min: 0,
        max: 0,
        current: 0
      }
      ]
    }

    // console.log(this.state.characterName)
    outBoundData.characterName = this.state.characterName;
    console.log(this.state.resource.length)
    for (let i = 0; i++; i < this.state.resource.length) {
      // this is not generating anything yet... nor overwriting anything... 
      //this must not be running- no console.log!
      // console.log(this.state.resource[i].resourceName);
      console.log("~~~~~~~~");
      outBoundData.resource[i].resourceName = this.state.resource[i].resourceName;
      outBoundData.resource[i].min = this.state.resource[i].min;
      outBoundData.resource[i].max = this.state.resource[i].resourceNamemax;
      outBoundData.resource[i].current = this.state.resource[i].current;
    } //try this with a forEach...
    //https://flaviocopes.com/how-to-iterate-object-properties-javascript/
    //
    console.log("outBoundData:");
    console.log(outBoundData);


    // ~~~~

    let characterExportData = {
      characterName: this.state.characterName,
      resource: [{}]
    };
    let resourceSize = this.state.resource.length;
    console.log("~~ character Data:");
    console.log(characterExportData);
    for (let i = 0; i < resourceSize; i++) {
      characterExportData.resource[i] = this.state.resource[i];
    }
  }
  // for loop, create new object for each part of array and then add it to above obect...
  //end save function

  handleNameEdit = () => {  // this toggles a form and changes the name based on changes to that form
    //maybe change this later to make modal pop up
    let newState = !this.state.editName;
    this.setState({ editName: newState })
  }


  handleNewResource = (event) => { // this creates a new resource, adding a blank resource to state
    console.log("this will add a new resource");
    // modal would be cooler...
    let tempObject = this.state.resource;
    let newResource = {
      resourceName: "New Resource",
      min: 0,
      max: 0,
      current: 0,
      addValue: 0,
      isEdit: true
    }
    tempObject.push(newResource);
    this.setState({ resource: tempObject });
    // this would be better if input came from a modal...
  }



  handleInputChange = (event) => {
    const target = event.target;
    console.log(event.target.value);
    const value = target.value; //separate function deals with math because these leaves a string
    this.setState({
      [event.target.name]: value
    });
  } // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react


  handleResourceToggle = (event, index) => {  //toggles resource form on and off

    let newBool = !this.state.resource[index].isEdit;
    let newState = this.state.resource;
    newState[index].isEdit = newBool;
    this.setState({ resource: newState });
  }

  handleResourceDelete = (event, index) => {  //toggles resource form on and off
    let newState = [];

    for (let i = 0; i < this.state.resource.length; i++) {
      if (index !== i) { newState[i] = this.state.resource[i]; }

    }
    // let newstate = newArray
    // console.log(newState);

    // let newBool = !this.state.resource[index].isEdit;
    // let newState = this.state.resource;
    // newState[index].isEdit = newBool;
    this.setState({ resource: newState });
  }


  handleResourceEdit = (event, index) => {  // handles changes to the expanded resource form.
    const target = event.target;
    const value = target.value; //may need to parse int... make a new function for numbers! handleNumberChange.... handleAddition works here?
    let tempObject = this.state.resource;
    if (target.name === "resourceName") {
      tempObject[index].resourceName = value;
    } else if (target.name === "min") {
      tempObject[index].min = parseInt(value);
    } else if (target.name === "max") {
      tempObject[index].max = parseInt(value);
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
  //NEED TO HANDLE ERRORS RELATING TO MIN OVER MAX!


  render() {
    let workingName = this.state.characterName;
    return (

      <div className="col-12 section">
        {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}

        {/* maybe make name its own component?
  if editName: false should display the name and an edit button. else if true it should have an empty container that allows user to type and save button saves to state...
  ...need to change workingName... or pass it into the function...
*/}
        {(this.state.editName ?
          <div>
            <h3> <span> {workingName} </span><button onClick={this.handleNameEdit}>Save</button> </h3>
            <form className="form-inline"

            >

              <label>
                <input type="text" name="characterName" value={this.state.characterName} onChange={this.handleInputChange}
                  className='long-form'
                />
              </label>

            </form>
          </div>
          :
          <h3 > <span>{this.state.characterName}</span> <button onClick={this.handleNameEdit}>edit</button></h3>
        )}

        {this.state.resource.map((resource, index) =>
          <div key={index}>
            {/* this should display all resources in state */}
            <Resource
              resourceName={this.state.resource[index].resourceName}
              currentNum={this.state.resource[index].current}
              maxNum={this.state.resource[index].max}
              minNum={this.state.resource[index].min}
              handleInputChange={(e) => this.handleResourceChange(e, index)}
              addNum={this.state.resource[index].addValue}
              resourceIndex={index}
              handleSubmit={(e) => this.handleAddition(e, index)}
              handleSubtract={(e) => this.handleSubtraction(e, index)}
              isEdit={this.state.resource[index].isEdit}
              // handle edit input...
              handleEdit={(e) => this.handleResourceEdit(e, index)} //dont know if this works yet
              handleToggle={(e) => this.handleResourceToggle(e, index)}
              handleDelete={(e) => this.handleResourceDelete(e, index)}
            />
          </div>
        )}
        <div className="subcomponent">
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleNewResource}>Add Resource</button>
          {/* this should simply add a resource to state and let the app rerender! */}
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleSave}>Save Section</button>
          {/* save button should be in each location that can be saved, or entire section only has 1? */}
          {/* NEED TO ADD A MINIMUM BUTTON SO THAT USERS CAN SET hp, ETC TO NEGATIVE NUMBERS (such as setting hp to -1/2 max hp) */}
          {/* format buttons! subcomponent class provides top and bottom padding to div, acting as margins for buttons */}
          {/* add resource should pop up and let the user fill in resourceName, minimum, current and max */}
        </div>

      </div>
    );
  }
}

export default CharacterHeader;


// https://www.taniarascia.com/content-editable-elements-in-javascript-react/
// not currently using the above link

//option to switch character here!
//only section that is not removable?!

//would be nice to add functionality that adds and subtracts for the player- maybe even showing the final number before saving the value...



