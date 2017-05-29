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
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr', 
    }

    
      const ribbonOne = { 
        background: '#f9e6d8',
        gridRow: '2 / 2', 
        gridColumn: '1 / 6 span',
      
      }

      const ribbonTwo = { 
        background: '#665052',
        gridRow: '3 / 3', 
        gridColumn: '1 / 6 span',
      
      }

      const ribbonThree = { 
        background: '#744740', 
        gridRow: ' 4 / 4', 
        gridColumn: '1 / 6 span',
      
      }

      const ribbonFour = {
        background: '#ede8e8',
        gridRow: '5 / 5', 
        gridColumn: '1 / 6 span',
       
      }

    return (
      <div style={pageGrid}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <BodyContainer></BodyContainer>
        <div style={ribbonOne}></div>
        <div style={ribbonTwo}></div>
        <div style={ribbonThree}></div>
        <div style={ribbonFour}></div>
        <Footer></Footer>
      </div>
    );
  }
}
