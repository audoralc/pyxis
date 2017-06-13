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
  padding: '3em 4em', 
})

export default class Subscribe extends React.PureComponent {

  constructor(props) {
    super(props); 
    this.state = {
      tier: false, 
    }; 
  } 

 handleTier = () => {
    if (this.state.tier === true) {
    this.setState({ tier:false }); 
  } else if (this.state.tier === false) {
    this.setState({ tier:true }); 
      }  
  }

  handleTierSelect = () => {
     
      const TierBlock = glamorous.div({
      background: '#FAFAFA',
      border: '2px solid #FAFAFA', 
      padding: '1em',
      margin: '0 2em',
      textAlign: 'center',
    }); 

    const TierSelect = glamorous.div({
      background: '#FAFAFA',
      border: '2px solid #303030', 
      width: '40%', 
      height: '20%',
      padding: '1em',
      margin: '0 2em',
      textAlign: 'center',
    }); 


  if (this.state.tier === false) { 
    return ( 
      <section style={tierSelection}>
           <TierBlock onClick={this.handleTierSelect}> 
              <div><FaDollar></FaDollar></div> 
              <h3> Tier One </h3>
            </TierBlock> 

            <TierBlock onClick={this.handleTierSelect}>
              <div><FaDollar></FaDollar><FaDollar></FaDollar></div> 
              <h3> Tier Two </h3>
            </TierBlock> 

            <TierBlock onClick={this.handleTierSelect}> 
              <div><FaDollar></FaDollar><FaDollar></FaDollar><FaDollar></FaDollar></div>  
              <h3>Tier Three </h3>
            </TierBlock> 
        </section> 
    )
  } else if (this.state.tier === true) {
      return (
        <section style={tierSelection}>
          <TierSelect onClick={this.handleTierSelect}> 
              <div><FaDollar></FaDollar></div> 
              <h3> Tier One </h3>
            </TierSelect> 

            <TierSelect onClick={this.handleTierSelect}>
              <div><FaDollar></FaDollar><FaDollar></FaDollar></div> 
              <h3> Tier Two </h3>
            </TierSelect> 

            <TierSelect onClick={this.handleTierSelect}> 
              <div><FaDollar></FaDollar><FaDollar></FaDollar><FaDollar></FaDollar></div>  
              <h3>Tier Three </h3>
            </TierSelect> 
          </section>  
      )
    }
  }

  render() {

    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh auto auto 10%',
    }
 
        const titleBlock = {
          textAlign: 'center',
          marginTop: '5%',
        }

        const tierGroup ={    
          display: 'flex', 
          flexDirection: 'row', 
          margin: '10% 5%',
          justifyContent: 'space-around', 
        }
    
    return (
      <div style={pageGrid}>
        <Helmet title="Subscribe" meta={[ { name: 'description', content: 'Description of Cart' }]}/>
         <Header></Header>

        <BodyContainer>
        
          <h2 style={titleBlock}> Pick a size: </h2>
          <section style={tierGroup}>  

            {handleTierSelect()}

           </section>
       
        </BodyContainer>

        <Footer></Footer> 
      
      </div>
    );
  }
}
