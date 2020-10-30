import React from 'react';
// import OptionSection from '../sections/OptionSection';
// import Template from '../sections/Template';
import CharacterHeader from '../sections/CharacterHeader';
import DescriptionSection from '../sections/DescriptionSection';
// import StatSection from '../sections/StatSection';
import SpellSection from '../sections/SpellSection';
import Notes from '../sections/Notes';
import LocationSection from '../sections/LocationSection';
import MapSection from '../sections/MapSection';

import { } from 'react-bootstrap';

/* Notes 
~~~~~~~~
Right now there are 3 main sections...
...and many minor sections.

Lets focus on the first few.
I want to be able to 
1. edit character name
2. Add character stat like HP
3. Add a Skill
4. Add a spell card
5. edit and delete stats
6. edit and delete skills
7. edit and delete cards
8. Switch between characters via database

then i can work on the 
#. location, map, and general sections


So, should buttons add things to the database, and the database fill out the form? Yeah.
...need to figure out starting page.
 

..pop up for adding notes when button clicked? look up details for bootstrap-react
~~~~~~~~
*/


//perhaps each section should have simply been a "Section" component with different objects passed in? they seem to really just be divs...

// By extending the React.Component class, Counter inherits functionality from it
class MainPage extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    // array of which components are visible
    //or individual variables for each component?
  };

  handleAddStat = () => {
    console.log("click");

  }



  // each section should be a row!
  render() {
    return (
      <div className="container-fluid pageInset">
        <div className="row">

          <div className="col-lg-5 col-md-6 testCont"> {/* left section */}
            <div className="row buffer">
              <CharacterHeader />
              {/* <OptionSection /> */}
              {/* lets add in options section later- start with a simple note taker */}
            </div>
            
            <h5>Character Notes</h5>
            <DescriptionSection />
          </div>
          <div className="col-lg-3 col-md-6 testCont">
            {/* middle section, center */}
            {/* this could use a */}
            <SpellSection />

          </div>

          <div className="col-lg-4 testCont">
            {/* right section */}
       Setting section
        {/* this section will need to be based around the idea of click on this to expand it */}
            <LocationSection />
            <MapSection />
            <Notes />
            {/* this should be campaign notes... or misc notes... ok, notes works */}

          </div>

        </div>
      </div>
    );
  }
}

export default MainPage;


/*
Notes:
I could do a single header with a bunch of buttons-
or I could set it up so that each section had a makevisible button...
...but that kinda sucks
header option allows sorting
-or at the very least, each container could appear upon click of a button
within header and that would allow the user to reorder them by untogglign them and retoggling

...
perhaps everythign has a click me for modal button?

    4,4,4 or 4,2,2,4 or 4,3,5 ...x/12 for bootstrap
                mobile or small devices will need to have 3 tabs the user can chose between instead of trying to dsplay all at once.
                  3 evenly spaced containers would be best...
                  ...how to make only 1 appear at a time - but only on mobile?
                  ...perhaps all 3 can be minimized... but mobile starts out with 2 minimized...
                  ...if I leave all 3 open, the user could simply minimize the first one to get to the others...
                  ...this is really more for large screened devices...
                  * need to look up toggles...

                  # instead of tabs... what? perhaps a header that displays options!
                    -would be better if user could move or even resize the tabs!


I want a section where you can see all the names of people you wrote notes on, click on a name and pull up info on that person.
I want this for locations as well...
...and ability to add tabs/notes sections...

*/