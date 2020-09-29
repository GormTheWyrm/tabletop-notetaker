import React from 'react';
// import '../../App.css';
import Skill from '../Skill'

function Template() {

    //each section component should be a row
  return (

    <div className="col-12 section">
        <Skill skillBonus={"#"} skillName={"Skill Name"} />
        {/* map this from database */}
        {/* should add ability to add new skills... */}
        <button type="button" className="btn btn-secondary btn-sm">Add button</button>
    </div>
  );
}

export default Template;