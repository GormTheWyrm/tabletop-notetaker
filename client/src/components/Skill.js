import React from 'react';
import '../SCSS/main.css';



function Skill(props) {

    //each section component should be a row
  return (

    <div className="col-12">
        <p>[{props.skillBonus}] <strong>{props.skillName}</strong></p>
    </div>
  );
}

export default Skill;