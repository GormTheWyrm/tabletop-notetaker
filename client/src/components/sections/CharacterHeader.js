
import React from 'react';
// import '../../App.css';


function CharacterHeader() {
let CharacterName = "Test Character";
let currentHP = "##";
let maxHP = "##";
//replace this with database content
    //each section component should be a row
  return (

    <div className="col-12 section">
      {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}
        <h3>{CharacterName}</h3>
        <p>HP: {currentHP} / {maxHP} </p>
        {/* add stat button? */}    <button type="button" class="btn btn-secondary btn-sm">Add button</button>
    </div>
  );
}

export default CharacterHeader;




//option to switch character here!
//only section that is not removable?!