
import React from 'react';
import '../../App.css';
// import AddStatForm from '../addStatForm';
// I may need to make the input its own component

// https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react

/*
potential bug if resources have the same name property. (form name is resourceName)
*/

// I need to initialize state with data from character database...
class CharacterHeader extends React.Component {
  constructor(props) {
    super(); //super(props); 

    this.state = {
      error: null,
      isLoaded: false,
      characterName: "Test Character1",
      resource: [{
        resourceName: "HP",
        min: 0,
        max: 15,
        current: 15,
        addValue: 0
      },
      {
        resourceName: "Stamina",
        min: 0,
        max: 15,
        current: 7,
        addValue: 0
      }
      ],
      inputValue1: 0
    }
    this.handleAdd = this.handleAdd.bind(this); // is this needed? This is reason I have constructor
  }

  //binding not needed if define funcitons with arrow functions!
  //which also means the constructor may not be needed...



  //init function to pull data from database.
  //onChange function
  //on save function to send daa to database...
  //onClick to add new resource
  //addResource to add that resource to the db... ?
  //need to add a increase max button


  //replace this with database content
  //may want to make resources appear in 2 columns on larger screens (later)
  handleNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  } //need a way for this function to determine which section is being changed...
  // lets make this a modal instead!
  //onChange is a event for form fields...


  testFunction = (event) => {
    this.setState({});
    console.log(this.state);
    console.log(event.target.value);
  } //on save right now.... fix!

  handleAdd = (event, resNum) => {
    event.preventDefault();
    let current = this.state.resource[resNum].current;
    let inputValue = this.state.inputValue1;  //this should eventually be this.state.resource[resNum].addValue
    let newValue = current + inputValue;  //these will need to be numbers- FIXME!
    let maxValue = this.state.resource[resNum].max;
    let minValue = this.state.resource[resNum].min;
    if (newValue > maxValue) {
      newValue = maxValue;
    } else if (newValue < minValue) {
      newValue = minValue;
    }
    let tempObject = this.state.resource;
    tempObject[resNum].current = newValue;
    this.setState({ resource: tempObject });

    console.log(this.state);
  } //on save right now.... fix!

  // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  //increase max button and function...


  //ise spread operator to add new resource



  handleInputChange = (event) => {
    // console.log(event.target);
    // for(let i=0; i++; i<this.state.resource.length){
    //   if(event.target.name === this.state.resource[i].name){
    //     let tempRes = this.state.resource;
    //     tempRes[i].addValue = event.target.value;
    //     this.setState({resource: tempRes});
    //   }
    //   console.log(this.state);
    // }
    const target = event.target;  //this is a string 
    console.log(event.target.value);
    const value = parseInt(target.value); //this should be an integer now
    this.setState({
      // [name]: value
      inputValue1: value
    });
  }


  handleSave = (event) => {
    // this should call api...
    //current issue: outbound data is not overwritten with state.
    console.log("this will call api... eventually");
    console.log(this.state);
    // need to this data... but should make sure it fits needed format first...
    let outBoundData =
    // {characterName: "", resource:[{resourceName: "", min: 0, max: 0}]};

    {
      characterName: "",
      resource: [{
        resourceName: "",
        min: 0,
        max: 0,
        current: 0
      },
      {
        resourceName: "0",
        min: 0,
        max: 0,
        current: 0
      }
      ]
    }

    // console.log(this.state.characterName)
    outBoundData.characterName = this.state.characterName;
    console.log(this.state.resource.length)
    for (let i = 0; i++; i < this.state.resource.length) {
      // this is not generating anything yet... nor overwriting anything... 
      //this must not be running- no console.log!
      // console.log(this.state.resource[i].resourceName);
      console.log("~~~~~~~~");
      outBoundData.resource[i].resourceName = this.state.resource[i].resourceName;
      outBoundData.resource[i].min = this.state.resource[i].min;
      outBoundData.resource[i].max = this.state.resource[i].resourceNamemax;
      outBoundData.resource[i].current = this.state.resource[i].current;
    } //try this with a forEach...
    //https://flaviocopes.com/how-to-iterate-object-properties-javascript/
    //
    console.log("outBoundData:");
    console.log(outBoundData);


    // ~~~~

    let characterExportData = {
      characterName: this.state.characterName,
      resource: [{}]
    };
    let resourceSize = this.state.resource.length;
    console.log("~~ character Data:");
    console.log(characterExportData);
    for (let i=0; i< resourceSize; i++) {
      characterExportData.resource[i] = this.state.resource[i];
    }
  }
  // for loop, create new object for each part of array and then add it to above obect...



  render() {
    return (

      <div className="col-12 section">
        {/* have to change col size if adding option section in... but options section looked ugly so we should find a better option */}
        <h3>{this.state.characterName} <button>edit</button></h3>
        {/* obviously the button needs tweaking */}
        {this.state.resource.map((resource, index) =>
          // map this via AddForm component
          <div key={this.state.resource[index].resourceName}>
            {/* this should display all resources in state */}


            <form className="form-inline" onSubmit={(e) => this.handleAdd(e, index)}>
              <span>{this.state.resource[index].resourceName} {this.state.resource[index].current} / {this.state.resource[index].max} </span>

              <label>
                <input type="number" name={this.state.resource[index].resourceName} className='my-form' onChange={this.handleInputChange}
                  value={this.state.inputValue1} />
              </label>
              <input type="submit" value="Add" />
            </form>
          </div>

        )}


        <button type="button" className="btn btn-secondary btn-sm">Add Resource</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleSave}>Save Section</button>
        {/* save button should be in each location that can be saved, or entire section only has 1? */}
        {/* NEED TO ADD A MINIMUM BUTTON SO THAT USERS CAN SET hp, ETC TO NEGATIVE NUMBERS (such as setting hp to -1/2 max hp) */}

      </div>
    );
  }
}

export default CharacterHeader;


// https://www.taniarascia.com/content-editable-elements-in-javascript-react/


//option to switch character here!
//only section that is not removable?!

//would be nice to add functionality that adds and subtracts for the player- maybe even showing the final number before saving the value...



/*
            <form className="form-inline" onSubmit={(e) => this.handleAdd(e, index)}>
              <span>{this.state.resource[index].resourceName} {this.state.resource[index].current} / {this.state.resource[index].max} </span>

              <label>
                <input type="number" name={this.state.resource[index].resourceName + "form"} className='my-form' />
              </label>
              <input type="submit" value="Add" />
              </form>




              broken:

                <AddStatForm resName={this.state.resource[index].resourceName}
              resCurrent={this.state.resource[index].current} resMax={this.state.resource[index].max}
              addHandler={this.handleAdd} name={this.state.resource[index].resourceName}
            />
*/