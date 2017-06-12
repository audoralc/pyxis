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

const TierDiv = glamorous.div({ 
  background: '#FAFAFA',

 
})

export default class Subscribe extends React.PureComponent {
  render() {

    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh auto auto 10%',
    }
 
        const titleBlock = {
          textAlign: 'center' ,
        }

        const tierGroup ={    
          display: 'flex', 
          flexDirection: 'row', 
          margin: '5%',
          justifyContent: 'space-around', 
        }
    
    return (
      <div style={pageGrid}>
        <Helmet title="Subscribe" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
         <Header></Header>

        <BodyContainer>
        
          <h2 style={titleBlock}> Pick a size: </h2>
          <section style={tierGroup}>            
            <TierDiv>               
              <div><FaDollar></FaDollar></div> 
              <h3>Tier One</h3>
            </TierDiv>

            <TierDiv> 
              <div><FaDollar></FaDollar><FaDollar></FaDollar></div> 
              <h3>Tier Two</h3>
            </TierDiv>

            <TierDiv> 
              <div><FaDollar></FaDollar><FaDollar></FaDollar><FaDollar></FaDollar></div> 
              <h3>Tier Three</h3>
            </TierDiv>
           </section>
       
        </BodyContainer>

        <Footer></Footer> 
      
      </div>
    );
  }
}
