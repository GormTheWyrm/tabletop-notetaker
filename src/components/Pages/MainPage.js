import React from 'react';
import OptionSection from '../sections/OptionSection';
import Template from '../sections/Template';
import CharacterHeader from '../sections/CharacterHeader';
import SkillSection from '../sections/SkillSection';
import StatSection from '../sections/StatSection';
import SpellSection from '../sections/SpellSection';
import Notes from '../sections/Notes';
import LocationSection from '../sections/LocationSection';
import MapSection from '../sections/MapSection';

// By extending the React.Component class, Counter inherits functionality from it
class MainPage extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    // array of which components are visible
    //or individual variables for each component?
  };



  // each section should be a row!
  render() {
    return (
      <div className="container-fluid pageInset">
        <div className="row">

          <div className="col-lg-6 col-md-6 testCont"> {/* left section */}
          <div className="row buffer">
            <CharacterHeader />
            <OptionSection />
            </div>
            <StatSection />
            <SkillSection />
          </div>
          <div className="col-lg-2 col-md-6 testCont">
            {/* middle section, center */}
            <SpellSection />

          </div>

          <div className="col-lg-4 testCont">
            {/* right section */}
        Notes section
        <LocationSection />
        <MapSection />
        <Notes />

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




*/