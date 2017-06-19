/**
*
* TierSystem
*
*/

import React from 'react';
import glamorous from 'glamorous'; 





const DetailGroup = glamorous.div({
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',       
    flexWrap: 'wrap',  
    justifyContent: 'space-around',              
    alignItems: 'center',   
    margin: '1em 0',
    textAlign: 'center', 
})
    const StyledHeader = glamorous.h2 ({
        minWidth: '80px',
    })

    const SmallBlock = glamorous.p ({ 
    background: '#0c3a7f',
    height: '8vw', 
    width: '8vw',
  })

    const MediumBlock = glamorous.p({
          height: '16vw', 
          width: '16vw', 
          background: '#0c3a7f',
    })

    const LargeBlock = glamorous.p({
          height: '20vw', 
          width: '20vw', 
          background: '#0c3a7f',
    })



class TierSystem extends React.PureComponent {
  render() {

    const tierRibbon = { 
        background: '#f6edeb',
        gridRow: '3 / 3', 
        gridColumn: '1 / 6 span',       
      }
    
        const tierDetails = {                
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',  
          margin: '0 auto', 
          padding: '5%',  
          width: '70%',   
        }

    return (

      <div style={tierRibbon}> 

        <div style={tierDetails}>    
          

          <DetailGroup>
            <StyledHeader> Small </StyledHeader>
            <SmallBlock>3 items $39</SmallBlock>   
          </DetailGroup> 

          <DetailGroup>
            <StyledHeader> Medium </StyledHeader>
            <MediumBlock>5 items $59</MediumBlock> 
          </DetailGroup> 

          <DetailGroup>
            <StyledHeader> Large </StyledHeader> 
           <LargeBlock>7 items $79</LargeBlock>     
          </DetailGroup> 
        

        </div>

      </div>
    );
  }
}

export default TierSystem;
