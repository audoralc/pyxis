/**
*
* CardSection
*
*/
import React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.PureComponent {
  render() {
    return (
      <div>
       
          <CardElement style={{ hidePostalCode:false }} />
       
      </div>
    );
  }
}
export default CardSection;

