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

    return (

      <div style={tierRibbon}>

      </div>
    );
  }
}

export default TierSystem;
