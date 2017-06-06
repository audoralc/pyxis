/**
*
* HowItWorks
*
*/

import React from 'react';

class HowItWorks extends React.PureComponent {
  render() {
    const ribbonStyle = {
       background: '#303030', 
        gridRow: ' 4 / 4', 
        gridColumn: '1 / 6 span',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',  
    }

        const firstMonthHalf = {           
            background: '#017B63',           
            margin: '0',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            padding: '3em', 
            justifyContent: 'space-between', 
          } 

          const middleDoot = {
            height: '200px',
          }

          const secondMonthHalf = { 
            background: '#FAFAFA', 
            margin: '0',     
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',           
            padding: '3em',
            justifyContent: 'space-between', 
          }

            const monthStyle = {
              color: '#FFECDB', 
            }

    return (
      <div style={ribbonStyle}>
          <div style={firstMonthHalf}>
              <div style={monthStyle}>Feb</div>   
              <div>Mar</div> 
              <div>Apr</div> 
              <div>May</div> 
              <div>June</div> 
          </div>
          <div style={middleDoot}> </div>   
            <div style={secondMonthHalf}>
              <div>Jul</div>   
              <div>Aug</div> 
              <div>Sept</div> 
              <div>Oct</div> 
              <div>Nov</div> 
            </div> 
      </div>
    );
  }
}

export default HowItWorks;
