import React from 'react';
import '../SCSS/main.css';


function Spell() {
let spellName = "Spellname";
let range = "range";
let description = "Spell description would go here";



    //each section component should be a row
  return (

    <div className="col-12 section">
        <p>{spellName}</p>
        <p>{range}</p>
        <p>{description}</p>
    </div>
  );
}

export default Spell;