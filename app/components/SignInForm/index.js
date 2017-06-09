/**
*
* SignInForm
*
*/

import React from 'react';

class SignInForm extends React.PureComponent {
  render() {
    const signInStyle = {
      width: '40%', 
      height: '100vh', 
      borderRight: '2px solid #000',
      marginRight: '10%',       
    }

    return (
      <div style={signInStyle}>
        <label>Password</label>          
        <input type="password" name="password" />
        <p> 
        <label>Email </label> 
        <input type="text" name="email" />
        </p>
      </div>
    );
  }
}

export default SignInForm;
