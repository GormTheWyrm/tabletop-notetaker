import React from 'react';
import '../SCSS/main.css';

// may want to change location of save buttons.
//also, add in delete buttons...

function Resource(props) {


  return (

    props.isEdit ?
      <div>
        <h3> <span> {props.resourceName} </span><button onClick={props.handleToggle}>Save</button> </h3>
        <form className="form-inline"
        // onSubmit={(e) => this.handleNameChange}
        >

          <label>
            Resource Name:
        <input type="text" name="resourceName" value={props.resourceName} onChange={props.handleEdit}
              className='long-form'
            />
          </label>
          <label>
            Resource minimum:
        <input type="number" name="min" value={props.minNum} onChange={props.handleEdit}
              className='long-form'
            />
          </label>
          <label>
            Resource Maximum:
        <input type="number" name="max" value={props.maxNum} onChange={props.handleEdit}
              className='long-form'
            />
          </label>
          <label>
            Resource Current Value:
        <input type="number" name="current" value={props.currentNum} onChange={props.handleEdit}
              className='long-form'
            />
          </label>

        </form>
      </div>
      //end of edit resource
      :
      // start edit number only
      <div key={props.resourceName} className="subcomponent">
        {/* this should display all resources in state */}


        <form className="form-inline"
          onSubmit={(e) => props.handleSubmit(e, props.resourceIndex)}
        >
          <span>{props.resourceName} {props.currentNum} / {props.maxNum} </span>

          <label>
            <input type="number" name={props.resourceName}
              className='my-form' onChange={props.handleInputChange}
              value={props.addNum} />
          </label>
          <input type="submit" value="Add" />
          <button type="button" className="btn btn-secondary btn-sm" onClick={(e) => props.handleToggle(e, props.resourceIndex)}>Edit Resource</button>
        </form>
      </div>




  );
}








// props: resource[i].resourceName
// ... map resource to this compoenent... should just be resourcename, not xx[i]...
//resourceName, currentNum, minNum, maxNum

export default Resource;

//will need to add a changeMax function... in parent and a button here
// edit resource button needs to allow change name...
// or just make a delete resource button... and make add work...



