/**
*
* TierSystem
*
*/

import React from 'react';

class TierSystem extends React.PureComponent {
  render() {

    const tierRibbon = { 
        background: '#665052',
        gridRow: '3 / 3', 
        gridColumn: '1 / 6 span',       
      }
    
        const tierDetails = {                
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between',  
          margin: '0 auto', 
          padding: '5%',  
          width: '70%',   
        }

          const detailGroup = {
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',       
            flexWrap: 'wrap',  
            justifyContent: 'space-between',              
            alignItems: 'center',   
            margin: '1em 0',
            textAlign: 'center',     
          }

            const smDetailBlock = {
              background: '#0c3a7f',
              height: '50px', 
              width: '50px',
                          
            }

            const mdDetailBlock = {
              height: '80px', 
              width: '80px', 
              background: '#0c3a7f',
                            
            }

            const lgDetailBlock = {
              height: '120px', 
              width: '120px', 
              background: '#0c3a7f',                              
            }

            
            const headerStyle ={ 
              minWidth: '80px',
            }

    return (

      <div style={tierRibbon}> 

        <div style={tierDetails}>    

          <div style={detailGroup}> 
            <h2 style={headerStyle}> Box Sizes</h2>          
            <p style={lgDetailBlock}>7 items</p>
            <p style={mdDetailBlock}></p> 
           <p style={smDetailBlock}>$79</p>     
          </div> 

         <div style={detailGroup}> 
            <h2 style={headerStyle}> Box Sizes</h2>          
            <p style={lgDetailBlock}>7 items</p>
            <p style={mdDetailBlock}></p> 
           <p style={smDetailBlock}>$79</p>     
          </div> 

           <div style={detailGroup}> 
            <h2 style={headerStyle}> Box Sizes</h2>          
            <p style={lgDetailBlock}>7 items</p>
            <p style={mdDetailBlock}></p> 
           <p style={smDetailBlock}>$79</p>     
          </div> 

        </div>

      </div>
    );
  }
}

export default TierSystem;
