/**
*
* BodyContainer
*
*/

import React from 'react';

class BodyContainer extends React.PureComponent {
  render() {
    const bodyStyle ={ 
      gridRow: '2 / 6', 
      gridColumn: '1 / 6 span',
      background: '#f6edeb',  
    }
    return (
      <div style={bodyStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default BodyContainer;
