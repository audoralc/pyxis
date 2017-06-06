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
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',      
      }
        const leftTierList ={ 
          width: '30%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-around', 
          alignItems: 'center',      
        }
          const tier = {
            background: '#3563a8',
            height: '150px', 
            width: '150px',
            margin: '1em', 
          }

        const rightTierDetails = {
          width: '70%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-around',   
        }

          const detailGroup = {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',   
          }

            const smDetailBlock = {
              background: '#3563a8',
              height: '50px', 
              width: '50px', 
            }

            const mdDetailBlock = {
              height: '80px', 
              width: '80px', 
              background: '#0c3a7f',
            }

            const lgDetailBlock = {
              width: '110px', 
              height: '110px', 
              background: '#0c3a7f',
            }
    return (

      <div style={tierRibbon}>
        <div style={leftTierList}>
          <div style={tier}></div> 
          <div style={tier}></div>
          <div style={tier}></div> 
        </div>


        <div style={rightTierDetails}>
          <div style={detailGroup}>
            <div style={smDetailBlock}></div> 
            <div style={mdDetailBlock}></div>
            <div style={lgDetailBlock}></div> 
          </div> 
          <div style={detailGroup}>
            <div style={smDetailBlock}></div> 
            <div style={mdDetailBlock}></div>
            <div style={lgDetailBlock}></div> 
          </div> 
           <div style={detailGroup}>
            <div style={smDetailBlock}></div> 
            <div style={mdDetailBlock}></div>
            <div style={lgDetailBlock}></div> 
          </div> 
        </div>
      </div>
    );
  }
}

export default TierSystem;
