import React from 'react';
import Person from '../compenents/Person';
import '../SCSS/main.css';

function PeopleSection() {

    //each section component should be a row
  return (

    <div className="col-12 section">
        <p>people section</p>
        {/* <Person />\map people */}
    </div>
  );
}

export default PeopleSection;