import React from 'react';

//may need to create new sections on the fly



function OptionsHeader() {

  return (
<div className="col-6 section">

<p>This should contain a variety of buttons to toggle sections!</p>
<button>test</button>
<button type="button" class="btn btn-secondary">Skills</button>
<button type="button" class="btn btn-secondary">Stats</button>
<button type="button" class="btn btn-secondary">Spells</button>
<button type="button" class="btn btn-secondary">Partyy</button>
<button type="button" class="btn btn-secondary">Location</button>
<button type="button" class="btn btn-secondary">Notes</button>
{/* I want notes for each character... those should show up upon clicking a ymbol/button near their name? ...this might be a good use for a modal... 
...or I need a dedicated section for reading notes...
 */}
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
  Single toggle
</button>   
{/* will toggle work in react? */}
    </div>
  );
}

export default OptionsHeader;