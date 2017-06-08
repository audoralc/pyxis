/*
 *
 * Cart
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from 'components/MyStoreCheckout';
import Header from 'components/Header';  
import BodyContainer from 'components/BodyContainer'; 
import Footer from 'components/Footer'; 


export default class Cart extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Cart" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
         <Header></Header>

        <BodyContainer> 
          <StripeProvider apiKey="pk_test_rJKqFRMRduGAyguxdWT2TfcI">
            <MyStoreCheckout />
          </StripeProvider>
        </BodyContainer>

        <Footer></Footer> 
      
      </div>
    );
  }
}
