/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import HomeHeadingContainer from 'components/HomeHeadingContainer';
import ExampleBoxes from 'components/ExampleBoxes'; 
import TierSystem from 'components/TierSystem';
import HowItWorks from 'components/HowItWorks';
import HomeSignUpRib from 'components/HomeSignUpRib';
import Footer from 'components/Footer';

export default class Home extends React.PureComponent {
  render() {
    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh auto 50vh auto 10%', 
    }   

    return (
      <div style={pageGrid}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <HomeHeadingContainer></HomeHeadingContainer>
        <ExampleBoxes></ExampleBoxes>
        <TierSystem></TierSystem>
        <HowItWorks></HowItWorks> 
        <HomeSignUpRib></HomeSignUpRib>
        <Footer></Footer>
      </div>
    );
  }
}
