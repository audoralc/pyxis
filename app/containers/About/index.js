/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import glamorous from 'glamorous'; 

/* did not make BodyContainer a component bc of different bg colors */ 

const BodyContainer = glamorous.section({
      background: '#FFECDB',
      gridRow: '2 / 6', 
      gridColumn: '1 / 6 span',
})


export default class About extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 25vh 25vh 25vh 25vh 10%', 
    }  

    
    return (
      <div style={pageGrid}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <Header></Header>
        <BodyContainer></BodyContainer>         
        <Footer></Footer>
      </div>
    );
  }
}
