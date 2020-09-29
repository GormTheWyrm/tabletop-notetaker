import React from 'react';
import Spell from '../Spell';

//this should be for spells and other actions- 
//debating changing name to reflect 4th edition abilities... moveset?
function SpellSection() {

    //each section component should be a row
  return (

    <div className="col-12 section">
      <p>Spell cards and other moveset abilities go here</p>
        <Spell />
        {/* map */}
    </div>
  );
}

export default SpellSection;