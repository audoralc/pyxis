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
      gridColumn: '1 / span 6', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr', 
      height: '100%', 
    }

      const leftStyle = {
        gridRow: '1 / 4 span', 
        gridColumn: '1 / 3 span', 
        background: '#4d3b3b',
        height: '105vh',         
      }

        const insetBoxRibbon = {
          background: '#f9e6d8', 
          margin: '25% 10% 10% 10%',          
          height: '75vh',  
        }

          

      const rightStyle= { 
        gridRow: '2 / 4 span',
        gridColumn: '4 / 6 span',
        background: '#f6edeb',
        padding: '2em',       
      }

        const headerBlock = {
            gridRow: '3 / 4',
            gridColumn: '3 / 5 span',
            zIndex: '2', 
            marginTop: '-10vh',                           
          } 

            const h1Style = {
              margin: '0', 
            }

            const h2Style ={ 
              margin: '0', 
            }
   
    return (      
        <div style={bodyStyle}> 
          <Header></Header> 
          
          <div style={leftStyle}>             
            <div style={insetBoxRibbon}>
             
              </div>                            
            </div>

            
           <div style={headerBlock}> 
                <h1 style={h1Style}> TITLE TITLE TITLE TITLE TITLE</h1>
                <h2 style={h2Style}> subtitle subtitle subtitle subtitle            </h2>
          </div> 
          
          <div style={rightStyle}>
          
          </div>

        </div>
        
    );
  }
}

export default BodyContainer;
