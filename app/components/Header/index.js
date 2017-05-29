/**
*
* Header
*
*/

import React from 'react';
import glamorous from 'glamorous'; 

const NavLink = glamorous.a({ 
  padding: '.5em', 
})

class Header extends React.PureComponent {
  

  render() {

    const headerStyle = { 
      gridRow: '1 / 1', 
      gridColumn: '4 / 6 span', 
      background: '#f6edeb',              
    }

      const navbarStyle = {
        display: 'flexbox', 
        flexDirection: 'row',
        padding: '1em 0', 
        fontSize: '1.25em', 
      }

        const callButton = {
          padding: ".75em",
          fontWeight: "600",
          color: "#ede8e8",  
          background: "#665052", 
        }

    return (
      <div style={headerStyle}>

        <nav style={navbarStyle}> 
          <NavLink>Home</NavLink>
          <a style={callButton}>Subscribe</a>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>FAQ</NavLink>
          <NavLink>Your Account</NavLink>
          <NavLink>Cart</NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
