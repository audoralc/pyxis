/*
 *
 * SignInSignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from 'components/MyStoreCheckout';

export default class SignInSignUp extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="SignInSignUp" meta={[ { name: 'description', content: 'Description of SignInSignUp' }]}/>
        <StripeProvider apiKey="pk_test_rJKqFRMRduGAyguxdWT2TfcI">
          <MyStoreCheckout />
        </StripeProvider>
      
      </div>
    );
  }
}
