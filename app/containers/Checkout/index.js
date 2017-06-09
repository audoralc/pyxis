/*
 *
 * Checkout
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import CheckoutWrapper from 'components/CheckoutWrapper'; 
import BodyContainer from 'components/BodyContainer'; 

export default class Checkout extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Checkout" meta={[ { name: 'description', content: 'Description of Checkout' }]}/>
        <BodyContainer>
          <CheckoutWrapper></CheckoutWrapper>
       </BodyContainer>  
      </div>
    );
  }
}
