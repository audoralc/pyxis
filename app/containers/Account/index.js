/*
 *
 * Account
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';  


export default class Account extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Account" meta={[ { name: 'description', content: 'Description of Account' }]}/>
        <Header> </Header>
        <BodyContainer> </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
