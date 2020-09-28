import React from 'react';



function PartySection() {

    //each section component should be a row
  return (

    <div className="col-12 section">
        <p>map a status bar for each person in party here</p>
        {/* may need to come up with a good way to quickly add or subtract hp.. or have a status and dmg description section for how they look rather than exact hp...
        ...bloodied! */}
    </div>
  );
}

export default PartySection;