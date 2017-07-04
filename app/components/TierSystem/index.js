/**
*
* TierSystem
*
*/

import React from 'react';
import glamorous from 'glamorous'; 





const DetailGroup = glamorous.div({
    display: 'flex', 
    flexDirection: 'row',      
    flexWrap: 'wrap',  
    justifyContent: 'space-between',                
    margin: '1em 0',
    textAlign: 'center', 
    alignItems: 'center',
})
    const StyledHeader = glamorous.h2 ({
        minWidth: '80px',
    })

    const SmallBlock = glamorous.div ({ 
    background: '#0c3a7f',
    height: '5vw', 
    width: '30vw',
  })

    const MediumBlock = glamorous.div({
          height: '5vw', 
          width: '50vw', 
          background: '#0c3a7f',
    })

    const LargeBlock = glamorous.div({
          height: '5vw', 
          width: '70vw', 
          background: '#0c3a7f',
    })



class TierSystem extends React.PureComponent {
  render() {

    const tierRibbon = { 
        background: '#f6edeb',
        gridRow: '3 / 3', 
        gridColumn: '1 / 6 span',       
      }

        const headerStyle = {
          textAlign: 'center', 
          fontFamily: 'Crimson Text, serif', 
          color: '#017B63',
          fontSize: '2em',
        }
    
        const tierDetails = {                
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between',  
          margin: '0 auto', 
          padding: '2.5% 5%', 
          width: '80vw',  
        }

        const pStyle = {
          color: '#FAFAFA',
        }

    return (

      <div style={tierRibbon}> 
          <h3 style={headerStyle}> choose a level</h3>

        <div style={tierDetails}>    
          

          <DetailGroup>            
            <SmallBlock> <p style={pStyle}> 3 items $39 </p></SmallBlock> 
            <StyledHeader> Small </StyledHeader>  
          </DetailGroup> 

          <DetailGroup>
            <MediumBlock><p style={pStyle}>5 items $59</p></MediumBlock> 
            <StyledHeader> Medium </StyledHeader>            
          </DetailGroup> 

          <DetailGroup>
            <LargeBlock><p style={pStyle}>7 items $79</p></LargeBlock>  
            <StyledHeader> Large </StyledHeader>            
          </DetailGroup> 
        

        </div>

      </div>
    );
  }
}

export default TierSystem;
