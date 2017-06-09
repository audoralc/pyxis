/*
 *
 * Cart
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { StripeProvider } from 'react-stripe-elements';
import Header from 'components/Header';  
import BodyContainer from 'components/BodyContainer'; 
import CheckoutWrapper from 'components/CheckoutWrapper'; 
import Footer from 'components/Footer'; 


export default class Cart extends React.PureComponent {
  render() {

    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr auto auto auto auto 10%',
    }
    
    return (
      <div style={pageGrid}>
        <Helmet title="Cart" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
         <Header></Header>

        <BodyContainer> 
          <StripeProvider apiKey="pk_test_rJKqFRMRduGAyguxdWT2TfcI">
            <CheckoutWrapper />
          </StripeProvider>
        </BodyContainer>

        <Footer></Footer> 
      
      </div>
    );
  }
}
