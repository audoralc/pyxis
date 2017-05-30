/**
*
* Footer
*
*/

import React from 'react';
import { FaFacebookSquare, FaTwitterSquare,FaInstagram } from 'react-icons/lib/fa'; 
import glamorous from 'glamorous'; 

const NavLink = glamorous.a({ 
    textDecoration: 'none', 
    color: '#F2F1EF',
    padding: '2px', 
    margin: '2px', 
    fontWeight: 'bold',
    ':hover' : { 
    color: '#0000b5', 
  },
})

class Footer extends React.PureComponent {
  render() {
    const footerStyle = {
      gridRow: ' 6 / 6',
      gridColumn: '1 / span 6', 
      background: '#4d3b3b', 
      color: '#F2F1EF',    
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
            color: '#FFECDB',  
          }

          const socialIconBlock = {
            fontSize: '1.5em',           
          }
              const iconStyle = {
                padding: '.25em',
              }

          const copyrightStyle = {
           textAlign: 'center', 
          }

          const logoStyle = {
            margin: '1em 0',
          }

    return (
      <div style={footerStyle}>

        <div style={infoRibbon}> 

          <div style={contactBlock}>
            <h3 style={h3Style}> Contact Us</h3>
            <NavLink href="about"> About Us</NavLink>
            <NavLink href="FAQ" > FAQ's</NavLink>
            <NavLink href="mailto:help@pyxis.com"> help@pyxis.com</NavLink> 
          </div>
       
          <div style={linksBlock}>
            <img src="http://placehold.it/50x50" style={logoStyle} />
            
            <div> 
              <NavLink href="/" >Home </NavLink>
              <NavLink href="/" >Subscribe</NavLink>
              <NavLink href="/" >Account</NavLink>
            </div>
          </div>

          <div style={socialBlock}>
            <h3 style={h3Style}>Connect</h3>

            <div style={socialIconBlock}> 
              <FaFacebookSquare style={iconStyle}></FaFacebookSquare>
              <FaTwitterSquare style={iconStyle}></FaTwitterSquare>
              <FaInstagram style={iconStyle}> </FaInstagram>
            </div>
          </div>

          
        </div>

        <div style={copyrightStyle}> 
          <p > © 2017</p>
        </div>
      </div>
    );
  }
}

export default Footer;
