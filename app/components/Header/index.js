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
  color: '#000000',
  ':hover' : { 
    color: 'red', 
  }
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
          padding: ".75em",
          fontWeight: "600",
          color: "#ede8e8",  
          background: "#665052",
          fontFamily: "'Crimson Text', serif", 
          textDecoration: 'none',  
        }

          const iconBlockStyle = {                       
            padding: ".75em",
            margin: '.5em 0',
           }
              const iconStyle = {
                margin: "0 .5em", 
              }

    return (
      <div style={headerStyle}>
        <div style={navbarStyle}> 
          <nav style={navLinksBlock}> 
            <NavLink href="/" >Home</NavLink>
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
