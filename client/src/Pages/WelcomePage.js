import React from 'react';
import '../SCSS/main.css';

// Welcome page shoudl be first page user sees upon navigating to site.
// this catches and directs new users to sign up and old users to sign in.
// need to block access to site... so jwt will be needed...


//this may not really need to be a class comonent

class WelcomePage extends React.Component {

    //

    render() {
        return (
            this.props.isLoggedIn ?
                // character select (once logged in)
                <div className='loginPage container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p>Welcome {this.props.profileName}, please select a character</p>

                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p><button onClick={(e) => this.props.characterCreate(e)}>CREATE CHARACTER</button> or select a character:</p>
                            </div>

                            {/* map a list of characters... as buttons or make a radial menu */}
                            {/* I need to pull the characters associated with this user - no users currently */}
                            <ul>
                                {/* map here */}
                                {/* may need to pull this in several collumns, 
                        limiting the numer of characters per player */}

                                <li><p><button onClick={(e) => this.props.characterSelect(e)}>Example</button> Character Name</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                // Log In Option here
                <div className='loginPage'>
                    <div className='LoginDiv'>
                        <h2>Please Log In</h2>
                    </div>
                    <button onClick={(e) => this.props.login(e)}>log in</button>

                </div>



        );
    }
}


export default WelcomePage;