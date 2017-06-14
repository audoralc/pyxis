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

        const months = {           
            background: '#017B63',
            color: '#FFECDB',            
            margin: '0',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            padding: '3em', 
            justifyContent: 'space-between', 
          } 

          const heading = {
            color: '#FAFAFA',
            textAlign: 'center',       
          }

    return (
      <div style={ribbonStyle}>
                  
          <div style={heading}>
            <h3> we do things in 7's - your delivery 7x a year</h3>
           </div>   
            <div style={months}>
              <div>Feb</div>
              <div>Mar</div> 
              <div>Apr</div> 
              <div>May</div> 
              <div>June</div> 
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
