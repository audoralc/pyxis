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
  height: '24px',
})


const SubButton = glamorous.a({ 
  background: '#303030',
  color: '#f6edeb',   
  textDecoration: 'none', 
  padding: '.25em .5em',
  marginRight: '.5em',   
  ':hover' : {
    color: '#303030',
    background: '#f6edeb',
  }
})
class Header extends React.PureComponent {
  

  render() {

    const headerStyle = { 
      gridRow: '1 / 1', 
      gridColumn: '1 / 6 span',     
      background: '#f6edeb', 
      display: 'grid', 
      gridTemplateRows: '1fr', 
      gridTemplateColumns: '1fr 1fr',
           
    }   
        const logoBlock = {
          gridRow: '1 / 1', 
          gridColumn: '1 / span 1',
          background: '#4d3b3b',
        }

           const logoStyle ={            
               margin: '1em',
               float: 'right',              
            }

        const navbarStyle ={
          gridRow: '1 / 1', 
          gridColumn: '2 / 2 span',  
          display: 'flex',
          flexWrap: 'wrap',         
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'flex-start',   
          margin: '1em',
          color: '#303030',
          background: '#f6edeb',
        }         
           

            const navLinksBlock = { 
              display: 'flex',
              flexWrap: 'wrap', 
              alignItems: 'center',                 
              fontSize: '1.25em',           
              fontWeight: '600',
              height: '24px',        
            }  

            const searchBlockStyle = {
              display: 'flex',
              flexWrap: 'wrap', 
              alignItems: 'center',
              justifyContent: 'flex-start',      
              height: '24px',
              marginLeft: '.75em',
            }           
       
                const searchBoxStyle = {
                  width: '5vw',
                  marginLeft: '1vw',         
                }

         const cartStyle = { 
          marginLeft: 'auto', 
         }

        

    return (
      <div style={headerStyle}>
        
        <div style={logoBlock}> 
          <a href="/" ><img src="https://previously.tv/m/author-previouslytv-staff-50x50.png"  style={logoStyle} /></a>
        </div>

        <div style={navbarStyle}>         
          <nav style={navLinksBlock}>             
            <SubButton href="/subscribe"> Subscribe</SubButton>
            <NavLink href="/about" >About</NavLink>
            <NavLink href="/contact-us" >Contact</NavLink>
            <NavLink href="/faq" >FAQ</NavLink>
            <NavLink href="" > Account</NavLink>  
          </nav>             

            <div style={searchBlockStyle}>         
              <FontIcon className="material-icons">search</FontIcon>
              <input type="text" style={searchBoxStyle} /> 
            </div> 
            
              <div style={cartStyle}> 
              <NavLink href="/cart" > <FontIcon className="material-icons">shopping_basket</FontIcon></NavLink>   
              </div> 
        </div> 

        

      </div>
    );
  }
}

export default Header;
