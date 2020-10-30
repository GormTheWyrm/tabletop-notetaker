import React from 'react';
import '../SCSS/main.css';

class AddStatForm extends React.Component {
    constructor(props) {
      super(props); //why is this complaining?
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(event.target.value); //remove this!
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    // all I need is to get a simple value to add to state...
    //use this function to pass value into other state... too tired to do that tonight
    // alert("submit");
    console.log(this.state.value);
    console.log("this is the submit function for the child, this is the wrong function")
    event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        {/* <form onClick={this.addHandler}> */}
          <label>
            <span>{this.props.resName}: {this.props.resCurrent} / {this.props.resMax}</span>
            <input className="my-form" type="number" value={this.state.value} onChange={this.handleChange} 
            name={this.props.name}
            // look up names and forms...
            />
          </label>
          <input type="submit" value="Add" />
          {/* do I need a name variable? shuld be name={this.state.resource[index].resourceName + "form"} */}
        </form>
      );
    }
  }
  export default AddStatForm;
  // may wat to extract this into a smaller component that does not display the actual data...


  // how to target value? oh, right, state