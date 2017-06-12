/*
 *
 * Subscribe
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import BodyContainer from 'components/BodyContainer';   
import Footer from 'components/Footer'; 
import glamorous from 'glamorous'; 
import { FaDollar } from 'react-icons/lib/fa'; 



export default class Subscribe extends React.PureComponent {
  render() {

    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh auto auto 50vh 10%',
    }
    
    return (
      <div style={pageGrid}>
        <Helmet title="Subscribe" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
         <Header></Header>

        <BodyContainer> 
      
        </BodyContainer>

        <Footer></Footer> 
      
      </div>
    );
  }
}
