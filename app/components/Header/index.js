/**
*
* Header
*
*/

import React from 'react';
import glamorous from 'glamorous'; 
import FontIcon from 'material-ui/FontIcon'; 

const NavLink = glamorous.a({ 
  padding: '0 .5em', 
  fontFamily: "'Crimson Text', serif",
  textDecoration: 'none', 
  color: '#303030',
  ':hover' : { 
    color: '#0000b5', 
  },
})

class Header extends React.PureComponent {
  

  render() {

    const headerStyle = { 
      gridRow: '1 / 1', 
      gridColumn: '4 / 6 span', 
      background: '#f6edeb', 
    }
      const navbarStyle ={ 
        display: 'flex', 
      }

      const navLinksBlock = {        
        padding: '1em 0', 
        fontSize: '1.15em',
        fontWeight: '600',        
      }

        const callButton = {          
          fontWeight: "600",
          color: '#303030',  
          border: "2px solid #0000b5",
          padding: '.25em',
          fontFamily: "'Crimson Text', serif", 
          textDecoration: 'none',  
          margin: '.25em'
        }

          const iconBlockStyle = {                       
            padding: ".75em",
            margin: '.5em 0',
           }
              const iconStyle = {
                margin: "0 .5em", 
              }

        const logoStyle ={ 
          padding: '0 1em', 
        }
    return (
      <div style={headerStyle}>
        <div style={navbarStyle}>

          <a href="/" ><img src="http://placehold.it/50x50" style={logoStyle} /></a>

          <nav style={navLinksBlock}>             
            <a href="/subscribe" style={callButton}>Subscribe</a>
            <NavLink href="/about" >About</NavLink>
            <NavLink href="/contact-us" >Contact</NavLink>
            <NavLink href="/faq" >FAQ</NavLink>
            <NavLink href="" > Account</NavLink>         
          </nav>

          <div style={iconBlockStyle} > 
            <a href="/cart" ><FontIcon className="material-icons" style={iconStyle}>shopping_basket</FontIcon></a>
            <FontIcon className="material-icons" style={iconStyle}>search</FontIcon>
          </div>
        </div> 
      </div>
    );
  }
}

export default Header;
