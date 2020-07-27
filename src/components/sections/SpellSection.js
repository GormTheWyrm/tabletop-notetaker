import React from 'react';
import Spell from '../Spell';


function SpellSection() {

    //each section component should be a row
  return (

    <div className="col-12 section">
      <p>Spell cards go here</p>
        <Spell />
        {/* map */}
    </div>
  );
}

export default SpellSection;