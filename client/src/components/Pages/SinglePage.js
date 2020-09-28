import React from 'react';
import Template from '../sections/Template';
import MainSection from '../sections/MainSection';

class SinglePage extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      // array of which components are visible
      //or individual variables for each component?
      currentSection: "none"
    };
  
  
  
    // each section should be a row!
    render() {
      return (
          <div>
          <MainSection />    
          </div>
        
        );
    }
  }
  
  export default SinglePage;