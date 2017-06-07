/**
*
* ExampleBoxes
*
*/

import React from 'react';

class ExampleBoxes extends React.PureComponent {
  render() {
    
    const ribbonStyle = {      
      gridRow: '2 / 2', 
      gridColumn: '1 / 6 span',
      background: '#FFECDB',
      textAlign: 'center', 
    }

      const imgBlock = {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',   
        margin: '0 10%',  

      }

      const headerStyle ={ 
        margin: '1em', 
      }

      const pStyle = { 
        margin: '5%',
      }
       
    return (
      <div style={ribbonStyle}>
        <h1 style={headerStyle}>TEST</h1>
        <div style={imgBlock}>
          <img src="https://placeholdit.co//i/200x200?bg=017B63" />
          <img src="https://placeholdit.co//i/200x200?bg=017B63" />
          <img src="https://placeholdit.co//i/200x200?bg=017B63" />
        </div>
        <p style={pStyle}> lorem ipsum dolor doot doot doot let's have a kiki</p>
      </div>
    );
  }
}

export default ExampleBoxes;
