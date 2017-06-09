/**
*
* SignUpForm
*
*/

import React from 'react';

class SignUpForm extends React.PureComponent {
  render() {
    const signUpStyle = {
      width: '40%', 
      height: '100vh', 
      borderLeft: '2px solid red',   
    }

    return (
      <div style={signUpStyle}>
        <form>
          <p>        
          <label>Email </label>
          <input type="text" name="email" />    
          </p>  

          <p>
          <label>Your Name </label>
          <input type="text" name="name" /> 
          </p>  

          <p>
          <label>Password</label>          
          <input type="password" name="password" />
          </p>  

          <p> 
          <label>Re-enter</label>
          <input type="password" type="password" />  
          </p>  
                 
        </form> 
      </div>
    );
  }
}

export default SignUpForm;
