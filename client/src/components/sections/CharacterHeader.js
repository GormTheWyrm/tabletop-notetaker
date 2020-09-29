
import React from 'react';
import '../../App.css';

class CharacterHeader extends React.Component {

  state = {
    characterName: "Test Character1",
    resource: [{
      resourceName: "HP",
      min: 0,
      max: 15,
      current: 15
    }]
  }
  //init function to pull data from database.
  //onChange function
  //on save function to send daa to database...
  //onClick to add new resource
  //addResource to add that resource to the db... ?


  // let CharacterName = "Test Character";
  // let currentHP = "##";
  // let maxHP = "##";
  //replace this with database content
  //each section component should be a row
  onNameChange = ()=> {

  }

  render() {
    return (

      <div className="col-12 section">
        {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}
        <h3 contentEditable="true">{this.state.characterName}</h3>
        <p>{this.state.resource[0].resourceName} {this.state.resource[0].current} / {this.state.resource[0].max} </p>
        {/* add stat button? */}    <button type="button" className="btn btn-secondary btn-sm">Add button</button>
      {/* add stat button? */}    <button type="button" className="btn btn-secondary btn-sm btn-right" style={{alignContent: "right"}}>Save button</button>
      
      
      </div>
    );
  }
}

export default CharacterHeader;


// https://www.taniarascia.com/content-editable-elements-in-javascript-react/


//option to switch character here!
//only section that is not removable?!