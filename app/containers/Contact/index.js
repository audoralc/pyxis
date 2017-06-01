/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import glamorous from 'glamorous'; 

const BodyContainer = glamorous.section({
  gridRow: '2 / 6', 
  gridColumn: '1 / 6 span', 
  background: '#665052',
})

export default class Contact extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh 50vh 50vh 10%', 
    }

    return (
      
      <div style={pageGrid}>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
        <Header></Header>
        <BodyContainer> </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
