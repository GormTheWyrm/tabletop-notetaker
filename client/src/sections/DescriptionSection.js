import React from 'react';
import '../SCSS/main.css';


function DescriptionSection() {

    //each section component should be a (col-12)
    // use this for notes on the character!

    //need to add an id or name so that we can tell different notes apart...
    //ideally, these should be collapsable...
  return (

    <div className="col-12 subsection">
        <p>Description section</p>
    </div>
  );
}

export default DescriptionSection;

// minimum viable product is a block of text.
// preferably several blocks of text...
// perhaps allow input of headers and paragraphs...
// add pictures?



/* 
lets have a list of notes that can be expanded?
use textarea?

each subsection should be like a resource... need subcomponent with a header and a textarea
perhaps can choose between a textarea or simple text box...

*/