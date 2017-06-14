/*
 *
 * SignInSignUp
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import BodyContainer from 'components/BodyContainer';
import SignUpForm from 'components/SignUpForm';
import SignInForm from 'components/SignInForm';
import Footer from 'components/Footer';

export default class SignInSignUp extends React.PureComponent {
  render() {
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr auto auto auto auto 10%',
    };
    const bodyReset = {
      display: 'flex',
      flexDirection: 'row',
    };
    return (
      <div style={pageGrid}>
        <Helmet title="SignInSignUp" meta={[{ name: 'description', content: 'Description of SignInSignUp' }]} />
        <Header></Header>

        <BodyContainer>
          <div style={bodyReset}>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
          </div>
        </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
