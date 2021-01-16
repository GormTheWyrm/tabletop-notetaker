import React from 'react';
import '../SCSS/main.css';

// may want to change location of save buttons.
//also, add in delete buttons...

function Resource(props) {


  return (

    props.isEdit ?
      <div className="subcomponent">
        <h3> <span> {props.resourceName} </span></h3>
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
        <button type="button" className="btn btn-secondary btn-sm" onClick={(e) => props.handleDelete(e, props.resourceIndex)}>Delete Resource</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={props.handleToggle}>Save</button>
      </div>
      //end of edit resource
      :
      // start edit number only
      <div key={props.resourceName} className="subcomponent">
        {/* this should display all resources in state */}


        <form className="form-inline"
          onSubmit={(e) => props.handleSubmit(e, props.resourceIndex)}
          // I should go back and make this handleAddition because it looks confusing
        >
          <div className="col-6">
          <span>{props.resourceName} {props.currentNum} / {props.maxNum} </span>
          </div>
          <div className="col-12">
          <label>
            <input type="number" name={props.resourceName}
              className='my-form' onChange={props.handleInputChange}
              value={props.addNum} />
          </label>
          <input type="submit" value="Add" />
          <input type="submit" value="Subtract" onClick={(e) => props.handleSubtract(e, props.resourceIndex)} />
          {/* need to figure out a way to get these two buttons on 1 line. will do this when I gt home */}
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-secondary btn-sm" onClick={(e) => props.handleToggle(e, props.resourceIndex)}>Edit Resource</button>

          </div>
        </form>
      </div>




  );
}








// props: resource[i].resourceName
// ... map resource to this component... should just be resourcename, not xx[i]...
//resourceName, currentNum, minNum, maxNum

export default Resource;

//will need to add a changeMax function... in parent and a button here
// edit resource button needs to allow change name...
// or just make a delete resource button... and make add work...



