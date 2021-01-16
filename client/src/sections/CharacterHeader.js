import React from 'react';
import '../SCSS/main.css';
import Resource from '../components/Resource';

//this app very much relies on MongoDB because the resources can change per character.
//A SQL version would probably have a set number of resources per class, with the max, min and current values changing per character.


/*
potential bug if resources have the same name property. (form name is resourceName)
*/

// I need to initialize state with data from character database...
// ~~~
// pass in name? ...would need to pass in the entire character...
//constructor needs to check if they should load new character or character's name
//...I could have the name inputted via props... from app.js
//... Ineed the character stats to be at a higher level... no, but I would if I wanted to make spells affect the current character.

//Log in, select/create a character and then this comes up.
//...I need to get character from database and load that info here...
//OPTIONS:
// -- move state up
// -- have character select on this section?
// === could I have the character select page load the character name and ID, then each section gets that info...independently... thats bad design






// this state needs to be moved into app... app->Mainpage(oranother)->characterHeader
class CharacterHeader extends React.Component {
  constructor(props) {
    super(); //super(props); 
    this.state = {
      error: null,
      isLoaded: false,
      characterName: props.mainCharacter.characterName,
      
      // "Test Character1",
      resource: [{
        resourceName: props.mainCharacter.resource[0].resourceName,
        min: props.mainCharacter.resource[0].min,
        max: props.mainCharacter.resource[0].max,
        current: props.mainCharacter.resource[0].current,
        addValue: 0, //too drunk to know if I need these...
        isEdit: false
      },
      {
        // resourceName: "Stamina",
        // min: 0,
        // max: 15,
        // current: 7,
        // addValue: 0
        resourceName: props.mainCharacter.resource[1].resourceName,
        min: props.mainCharacter.resource[1].min,
        max: props.mainCharacter.resource[1].max,
        current: props.mainCharacter.resource[1].current,
      }
      ],
      inputValue1: 0, //test to see if I can delete this
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
    // this.handleAddition = this.handleAddition.bind(this);
    //binding not needed if define functions with arrow functions!
    //which also means the constructor may not be needed...
  }

  //init function to pull data from database. this should be done elsewhere 

//STILL NEED TO FIX SAVE RESOURE, EDIT RESOURCE AND DELETE RESOURCE




  







//   handleInputChange = (event) => {
//     const target = event.target;
//     console.log(event.target.value);
//     const value = target.value; //separate function deals with math because these leaves a string
//     this.setState({
//       [event.target.name]: value
//     });
//   } // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
// //wrking on removing and relocating to app.js...

 

 


  


  render() {
    let workingName = this.state.characterName;
    return (

      <div className="col-12 section">
        {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}

            {/* maybe make name its own component?
             if editName: false should display the name and an edit button. else if true it should have an empty container that allows user to type and save button saves to state...
            ...need to change workingName... or pass it into the function...
            */}
        {(this.props.mainCharacter.editName ?
        // CURRENTLY BROKEN!
          <div>
            <h3> <span> {workingName} </span><button onClick={()=>this.props.handleNameEdit()}>Save</button> </h3>
            <form className="form-inline"

            >

              <label>
                <input type="text" name="characterName" value={this.props.mainCharacter.characterName} onChange={this.props.handleNameChange}
                  className='long-form'
                />
              </label>

            </form>
          </div>
          :
          <h3 > <span>{this.props.mainCharacter.characterName}</span> <button onClick={()=>this.props.handleNameEdit()}>edit</button></h3>
        )}

        {this.props.mainCharacter.resource.map((resource, index) =>
          <div key={index}>
            {/* this should display all resources in state */}
            <Resource
              resourceName={this.props.mainCharacter.resource[index].resourceName}
              currentNum={this.props.mainCharacter.resource[index].current}
              maxNum={this.props.mainCharacter.resource[index].max}
              minNum={this.props.mainCharacter.resource[index].min}
              handleInputChange={(e) => this.props.handleResourceChange(e, index)} // use arrow function here - works!
              addNum={this.props.mainCharacter.resource[index].addValue}
              resourceIndex={index}
              handleSubmit={(e) => this.props.handleAddition(e, index)} //fixed?
              handleSubtract={(e) => this.props.handleSubtraction(e, index)}  //fixed?
              isEdit={this.props.mainCharacter.resource[index].isEdit}
              // handle edit input...
              handleEdit={(e) => this.props.handleResourceEdit(e, index)} //dont know if this works yet
              handleToggle={(e) => this.props.handleResourceToggle(e, index)}
              handleDelete={(e) => this.props.handleResourceDelete(e, index)}
            />
          </div>
        )}
        <div className="subcomponent">
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.props.handleNewResource}>Add Resource</button>
          {/* this should simply add a resource to state and let the app rerender! */}
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.props.handleSaveCharacter}>Save Section</button>

          {/* format buttons! subcomponent class provides top and bottom padding to div, acting as margins for buttons */}
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



