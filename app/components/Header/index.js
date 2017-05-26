/**
*
* Header
*
*/

import React from 'react';

class Header extends React.PureComponent {
  

  render() {

    const headerStyle = { 
      gridRow: '1 / 1', 
      gridColumn: '2 / 2', 
      background: '#fffefb',         
    }

    return (
      <div style={headerStyle}>

      </div>
    );
  }
}

export default Header;
