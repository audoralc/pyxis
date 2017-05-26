/**
*
* BodyContainer
*
*/

import React from 'react';
import Header from 'components/Header'; 
/* Header witin the BodyConntainer keeps bg colors */ 

class BodyContainer extends React.PureComponent {
  render() {
    const bodyStyle = {
      gridColumn: 'auto / span 2', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 7fr',  
    }

      const leftStyle = {
        gridRow: '1 / 8', 
        gridColumn: '1 / 1', 
        background: '#4d3b3b',         
      }
    
      const rightStyle= { 
        gridRow: '2 / 8',
        gridColumn: '2 / 2',
        background: '#fffefb',        
      }
   
    return (      
        <div style={bodyStyle}> 
          <Header></Header> 
          <div style={leftStyle}></div>
          <div style={rightStyle}></div>

        </div>
        
    );
  }
}

export default BodyContainer;
