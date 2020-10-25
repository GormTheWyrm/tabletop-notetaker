import React from 'react';

// Welcome page shoudl be first page user sees upon navigating to site.
// this catches and directs new users to sign up and old users to sign in.
// need to block access to site... so jwt will be needed...


//this may not really need to be a class comonent

function WelcomePage() {


    return (this.props.isLoggedIn ? 
        <div>
            <p>Welcome {props.profileName}</p>
        </div>
        :
        <div>
            <p>Please log in</p>
        </div>
        
  

    );
}


export default WelcomePage;