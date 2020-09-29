
import React from 'react';
import '../../App.css';

/*
potential bug if resources have the same name property. (form name is resourceName)
*/
class CharacterHeader extends React.Component {

  state = {
    characterName: "Test Character1",
    resource: [{
      resourceName: "HP",
      min: 0,
      max: 15,
      current: 15
    },
    {
      resourceName: "Stamina",
      min: 0,
      max: 15,
      current: 7
    }
  ]
  }
  //init function to pull data from database.
  //onChange function
  //on save function to send daa to database...
  //onClick to add new resource
  //addResource to add that resource to the db... ?


  //replace this with database content
  //may want to make resources appear in 2 columns on larger screens (later)
  handleNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  } //need a way for this function to determine which section is being changed...

  //onChange is a event for form fields...
  testFunction = (event) => {
    this.setState({});
    console.log(this.state);
    console.log(event.target.value);
  } //on save right now.... fix!
  render() {
    return (

      <div className="col-12 section">
        {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}
        <h3 contentEditable="true" onChange={this.handleNameChange} >{this.state.characterName}</h3>

        {this.state.resource.map((resource, index) =>

          <div>
            {/* this should display all resources in state */}
            <form className="form-inline">
            <span>{this.state.resource[index].resourceName} {this.state.resource[index].current} / {this.state.resource[index].max} </span>
            
              <label> 
                 <input type="number" name={this.state.resource[index].resourceName} className='my-form'/>
              </label>
              <input type="submit" value="Add" />
              {/* this should set the value of the resource to the state plus the value of the form... */}
            </form>
          </div>

        )}


        <button type="button" className="btn btn-secondary btn-sm">Add Resource</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.testFunction}>Save Section</button>
        {/* save button should be in each location that can be saved, or entire section only has 1? */}

      </div>
    );
  }
}

export default CharacterHeader;


// https://www.taniarascia.com/content-editable-elements-in-javascript-react/


//option to switch character here!
//only section that is not removable?!

//would be nice to add functionality that adds and subtracts for the player- maybe even showing the final number before saving the value...