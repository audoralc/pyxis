/**
*
* NavBar
*
*/

import React from 'react';
import glamorous from 'glamorous'; 
import FontIcon from 'material-ui/FontIcon';
import { FaArrowDown } from 'react-icons/lib/fa';



const NavLink = glamorous.a({ 
  padding: '0 .5em', 
  textDecoration: 'none', 
  color: '#000000',
  ':hover' : { 
    color: '#0c3a7f',  
  },
  height: '24px',
})

const SubButton = glamorous.button({ 
  background: '#0c3a7f',
  textDecoration: 'none',
  border: '2px solid #f6edeb',  
  color: '#f6edeb',   
  padding: '.25em .5em',
  fontSize: '1em',
  marginRight: '.5em',   
  ':hover' : {
    color: '#017B63',
    border: '2px solid #017B63',
    background: '#f6edeb',
  }
})


class NavBar extends React.PureComponent {
  constructor(props) {
    super(props); 
    this.state = {
      isMenuOpen:false
    }; 
  }

  render() {
 

     const navbarStyle ={
          gridRow: '1 / 1', 
          gridColumn: '2 / 2 span',  
          display: 'flex',
          flexWrap: 'wrap',   
          flexShrink: '1',       
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'flex-start',   
          margin: '1em',
          color: '#000000',
          background: '#f6edeb',
        }         
           

            const navLinksBlock = { 
              display: 'flex',
              flexWrap: 'wrap', 
              alignItems: 'center',                 
              fontSize: '1.25em',           
              height: '24px',        
            } 

            const buttonLinkStyle = {
            textDecoration: 'none', 
            color: '#f6edeb',  
         }
    return (
        <div style={navbarStyle}>         
          <nav style={navLinksBlock}>             
            <a href="/subscribe" style={buttonLinkStyle}><SubButton>  Subscribe </SubButton></a>
            <NavLink href="/about" >About</NavLink>
            <NavLink href="/contact-us" >Contact</NavLink>
            <NavLink href="/faq" >FAQ</NavLink>
            
              <NavLink href="/account" > Account</NavLink>
              <NavLink href="/login"> login</NavLink>
              <NavLink href=''> logout</NavLink>
            
          </nav>   

          <NavLink href="/checkout" > <FontIcon className="material-icons">shopping_basket</FontIcon></NavLink> 
        </div> 
    );
  }
}

export default NavBar;
