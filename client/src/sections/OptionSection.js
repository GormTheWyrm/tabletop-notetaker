import React from 'react';
import '../SCSS/main.css';
//may need to create new sections on the fly



function OptionsHeader() {

  return (
<div className="col-6 section">

<p>This should contain a variety of buttons to toggle sections!</p>

<button type="button" class="btn btn-secondary spacer btn-sm">Skills</button>
<button type="button" class="btn btn-secondary spacer btn-sm">Stats</button>
<button type="button" class="btn btn-secondary spacer btn-sm">Spells</button>
<button type="button" class="btn btn-secondary spacer btn-sm" >Party</button>
<button type="button" class="btn btn-secondary spacer btn-sm" >Location</button>
<button type="button" class="btn btn-secondary spacer btn-sm">Notes</button>
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