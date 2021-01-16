import React from 'react';
import '../SCSS/main.css';

class LoginPage extends React.Component {

    // constructor(props) {
    //     super(); //super(props); 

    
    // }

    render(){
        return(
            <div className='loginPage'>
                <div className='LoginDiv'>
                <h2>Please Log In</h2>
                </div>
            <button onClick={(e) => this.props.login(e)}>log in</button>

            </div>
        );
    }
}

export default LoginPage;


