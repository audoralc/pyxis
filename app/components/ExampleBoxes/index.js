/**
*
* ExampleBoxes
*
*/

import React from 'react';

class ExampleBoxes extends React.PureComponent {
  render() {
    
    const ribbonStyle = {
      background: '#f6edeb',
      gridRow: '5 / 5', 
      gridColumn: '1 / 6 span',
    }

    return (
      <div style={ribbonStyle}>

      </div>
    );
  }
}

export default ExampleBoxes;
