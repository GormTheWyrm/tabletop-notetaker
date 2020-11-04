import React from 'react';
import '../SCSS/main.css';
import Resource from '../components/Resource';
// import AddStatForm from '../addStatForm';
// I may need to make the input its own component

// https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react

/*
potential bug if resources have the same name property. (form name is resourceName)
*/

// I need to initialize state with data from character database...



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
    //this.handleAdd = this.handleAdd.bind(this); // is this needed? This is reason I have constructor
    this.handleAddition = this.handleAddition.bind(this);
  }

  //binding not needed if define funcitons with arrow functions!
  //which also means the constructor may not be needed...



  //init function to pull data from database.
  //onChange function
  //on save function to send daa to database...
  //onClick to add new resource
  //addResource to add that resource to the db... ?
  //need to add a increase max button


  //replace this with database content
  //may want to make resources appear in 2 columns on larger screens (later)





  // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  //increase max button and function...
  //use spread operator to add new resource?


  handleResourceChange = (event, index) => {  // this allows subcomponent numbers to be changed by the user
    event.preventDefault();
    const target = event.target;  //this is a string 
    console.log(event.target.value);
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

  handleNameEdit = () => {
    console.log("test"); //works!
    //make modal pop up
    //need to obtain myVar...

    // console.log(workingName); //not defined

    let myVar = "test"
    let newState = !this.state.editName;
    console.log(newState);
    this.setState({ editName: newState })
    // this neeeds to be redone to involve a modal...


    // on save this should setstate for character name!

    // this.setState({ characterName: myVar })
  }

  handleNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  } //need a way for this function to determine which section is being changed...
  // lets make this a modal instead!
  //onChange is a event for form fields...



  handleNewResource = () => { // this creates a new resource. May need a function to come up with the data to put in that resource...
    console.log("this will add a new resource");
    // need to get name, min, max and current from somewhere and then put them into this function...
    //simplest way is to add a form
    // modal would be cooler...
    let tempObject = this.state.resource;
    let newResource = {
      resourceName: "New Resource",
      min: 0,
      max: 0,
      current: 0,
      isEdit: true
    }
    tempObject.push(newResource);
    console.log(tempObject);
    // this would be better if input came from a modal...
  }



  handleInputChange = (event) => {
    const target = event.target;
    console.log(event.target.value);
    const value = target.value; //may need to parse int... make a new function for numbers! handleNumberChange
    this.setState({
      // [name]: value
      // ...this.state,
      [event.target.name]: value
    });
  } // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react


  handleResourceToggle = (event, index) => {
    console.log("test"); // Works
    //make modal pop up
    //need to obtain myVar...
    //... later!
    let newBool = !this.state.resource[index].isEdit;
    let newState = this.state.resource;
    newState[index].isEdit = newBool;
    this.setState({ resource: newState });

    this.setState({ resource: newState })
    // this neeeds to be redone to involve a modal...



    // on save this should setstate for character name!

    // this.setState({ characterName: myVar })
  }

  handleResourceToggle2 = (event, index) => {
    console.log("test"); // not working... in subcomponent
    //make modal pop up
    //need to obtain myVar...

    let newState = !this.state.editResource;

    this.setState({ editResource: newState })
    // this neeeds to be redone to involve a modal...


    // on save this should setstate for character name!

    // this.setState({ characterName: myVar })
  }
  handleResourceEdit = (event, index) => {
    //this needs to set state upon input change for the specific resource!
    //cannot test until expand works
    const target = event.target;
    console.log(event.target.value);


    const value = target.value; //may need to parse int... make a new function for numbers! handleNumberChange
    let tempObject = this.state.resource;

    if (target.name === "resourceName") {
      tempObject[index].resourceName = value;

    } else if (target.name === "min") {
      tempObject[index].min = value;

    } else if (target.name === "max") {
      tempObject[index].max = value;

    } else if (target.name === "current") {
      tempObject[index].current = value;
    } else {
      console.log("error: no change"); //I dont think this is possible as an error but it should just save the current state
    }

    this.setState({ resource: tempObject });

  }


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
            // onSubmit={(e) => this.handleInputChange}
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
        {/* obviously the button needs tweaking */}
        {this.state.resource.map((resource, index) =>
          // map this via AddForm component
          <div key={this.state.resource[index].resourceName}>
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
              isEdit={this.state.resource[index].isEdit}
              // handle edit input...
              handleEdit={(e) => this.handleResourceEdit(e, index)} //dont know if this works yet
              handleToggle={(e) => this.handleResourceToggle(e, index)}
            />



          </div>  //replace this div with the Resource component


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



