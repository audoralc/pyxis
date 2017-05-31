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
  borderLeft: '2px solid #0000b5',
  borderRight: '2px solid #0000b5', 
  padding: '4px',
  textDecoration: 'none', 
  color: '#0000b5',
  margin: '0', 
  ':hover' : {
    background: '#303030', 
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
          flexWrap: 'wrap',         
          alignItems: 'center',
          alignContent: 'space-between',
          justifyContent: 'flex-start',   
          padding: '1%',
          color: '#303030',
        }         
           

            const navLinksBlock = { 
              display: 'flex',
              flexWrap: 'wrap', 
              alignItems: 'center',                 
              fontSize: '1.15em',           
              fontWeight: '600',
              height: '24px',        
            }  

            const searchBlockStyle = {
              display: 'flex',
              flexWrap: 'wrap', 
              alignItems: 'center',       
              margin: '.5em 0',
              height: '24px',
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
