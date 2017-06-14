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
import GeneratePdfbutton from 'components/GeneratePdfbutton';
import glamorous from 'glamorous';

const StyledSection = glamorous.section ({
  borderBottom: '2px solid #000000',
});

export default class Account extends React.PureComponent {
  render() {
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr auto auto auto auto 10%',
    };
    const accountStyle = {
      margin: '5% auto',
      width: '80vw',
      height: '100vh',
    };

    return (
      <div style={pageGrid}>
        <Helmet title="Account" meta={[{ name: 'description', content: 'Description of Account' }]} />
        <Header> </Header>
        <BodyContainer>
          <div style={accountStyle}>

            <StyledSection label="CustInfo">
              <h2>My Information</h2>
            </StyledSection>

            <StyledSection label="Membership">
              <h2>My Membership</h2>
            </StyledSection>

            <StyledSection label="PaymentTypes">
              <h2>My Payment Info</h2>
            </StyledSection>

            <StyledSection label="Deliveries">
              <h2>My Deliveries</h2>
            </StyledSection>

            <StyledSection label="Addresses">
              <h2>My Addresses</h2>
            </StyledSection>

            <GeneratePdfbutton />

          </div>
        </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
