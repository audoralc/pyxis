/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import BodyContainer from 'components/BodyContainer'; 
import Footer from 'components/Footer'; 

export default class Home extends React.PureComponent {
  render() {
    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '100%', 
      gridTemplateRows: '90vh 10vh', 
    }
    return (
      <div style={pageGrid}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <BodyContainer></BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
