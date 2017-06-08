/*
 *
 * SignInSignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from 'components/MyStoreCheckout';
import Header from 'components/Header';  
import BodyContainer from 'components/BodyContainer'; 
import Footer from 'components/Footer'; 

export default class SignInSignUp extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="SignInSignUp" meta={[ { name: 'description', content: 'Description of SignInSignUp' }]}/>
        <Header></Header>

        <BodyContainer> 
    
        </BodyContainer>

        <Footer></Footer>      
      </div>
    );
  }
}
