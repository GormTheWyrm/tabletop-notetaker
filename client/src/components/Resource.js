import React from 'react';
import '../SCSS/main.css';


function Resource(props) {

  
        return (
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
            </form>
          </div>
        );
    }
// props: resource[i].resourceName
// ... map resource to this compoenent... should just be resourcename, not xx[i]...
//resourceName, currentNum, minNum, maxNum

export default Resource;

//will need to add a changeMax function... in parent and a button here




