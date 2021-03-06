/**
*
* SignInForm
*
*/
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class SignInForm extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
    };
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }


  handleSignIn = () => {
    const data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://localhost:8000/api/signIn', {
      method: 'post',
      body: data,
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error) {
        alert(json.error);
      } else if (json.token === false) {
        alert('invalid credentials');
      } else if (json.token !== false) {
        alert('Welcome Back!');
        sessionStorage.setItem('token', JSON.stringify(json.token));
        this.setState({ token: sessionStorage.getItem('token') });
        console.log(this.state.token);
      }
    });
  }
  render() {
    const signInStyle = {
      width: '40%',
      height: '100vh',
      borderRight: '2px solid #000',
      marginRight: '10%',
    };

    return (
      <div style={signInStyle}>

        <p>
          <label>Email </label>
          <input type="text" name="email" onChange={this.handleEmail} />
        </p>

        <label>Password</label>
        <input type="password" name="password" onChange={this.handlePassword} />
        <p><RaisedButton label="Default" onTouchTap={this.handleSignIn} /></p>
      </div>
    );
  }
}
export default SignInForm;

