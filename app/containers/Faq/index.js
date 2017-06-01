/*
 *
 * Faq
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import glamorous from 'glamorous'; 

const BodyContainer = glamorous.div({
      gridRow: '2 / 6', 
      gridColumn: '1 / 6 span',
      background: '#f6edeb',      
})

export default class Faq extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh 50vh 50vh 10%', 
    }

    return (
      <div style={pageGrid}>
        <Helmet title="Faq" meta={[ { name: 'description', content: 'Description of Faq' }]}/>
        <Header></Header>
        <BodyContainer> </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
