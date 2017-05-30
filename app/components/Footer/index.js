/**
*
* Footer
*
*/

import React from 'react';

class Footer extends React.PureComponent {
  render() {
    const footerStyle = {
      gridRow: ' 6 / 6',
      gridColumn: '1 / span 6', 
      background: '#744740',      
    }

      const infoRibbon={ 
        display: 'flex', 
        flexDirection: 'row', 
        margin: '2vh 20%',
        width: '100%',
      }
        
        const contactBlock ={ 
          borderRight: '2px solid #000000',         
          width: '20%', 
          display: 'flex', 
          flexDirection:'column', 
          textAlign: 'center',            
        }
        
        const linksBlock = {
          borderRight: '2px solid #000000',
                
          width: '20%',  
          textAlign: 'center',
        }
        
        const socialBlock = {
                  
          width: '20%', 
          textAlign: 'center',
        }

          const h3Style = {
            margin: '0 0 .5em 0',
            fontSize: '1.25em',  
          }
          const linkStyle ={
            textDecoration: 'none', 
            color: '#f9e6d8',
            padding: '2px',            
          }
        
    return (
      <div style={footerStyle}>

        <div style={infoRibbon}> 

          <div style={contactBlock}>
            <h3 style={h3Style}>Contact Us</h3>
            <a href="about" style={linkStyle}>About Us</a>
            <a href="FAQ" style={linkStyle}>FAQ's</a>
            <a href="mailto:help@pyxis.com" style={linkStyle}>help@pyxis.com</a> 
          </div>
          
          <div style={linksBlock}>
            
          </div>

          <div style={socialBlock}>
            <h3 style={h3Style}>Connect</h3>
          </div>

          
        </div>

        <div> 
          <p> copyright info</p>
        </div>
      </div>
    );
  }
}

export default Footer;
