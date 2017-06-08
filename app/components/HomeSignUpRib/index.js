/**
*
* HomeSignUpRib
*
*/

import React from 'react';
import ReactPlaceholder from 'react-placeholder'; 
import glamorous from 'glamorous'; 

const SubButton = glamorous.button ( {
  background: '#017B63',
  color: '#f6edeb',  
  border: '2px solid #f6edeb', 
  textDecoration: 'none', 
  padding: '.25em .5em',
  fontSize: '1.5em',
  fontWeight: 'bold', 
  fontFamily: 'Crimson Text', 
  ':hover' : {
    color: '#017B63',
    background: '#f6edeb', 
    border: '2px solid #017B63',
   
  }
})

class HomeSignUpRib extends React.PureComponent {
  render() {
    
    const ribbonStyle = {
      background: '#f6edeb',
      gridRow: '5 / 5', 
      gridColumn: '1 / 6 span',
      textAlign: 'center',
      padding: '5%',  
    }

      const pStyle = {       
        margin: '2em 0', 
      }

    return (
      <div style={ribbonStyle}>
        <img src="https://placeholdit.co//i/500x150?bg=303030" /> 
        <p style={pStyle}><ReactPlaceholder type="text" rows={5}></ReactPlaceholder></p>
        <SubButton> Subscribe </SubButton>
      </div>
    );
  }
}

export default HomeSignUpRib;
