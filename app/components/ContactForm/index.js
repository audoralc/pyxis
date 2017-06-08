/**
*
* ContactForm
*
*/

import React from 'react';
import glamorous from 'glamorous'; 

const StyledLabel = glamorous.label({
    display: 'block', 
    marginBottom: '.5em',
})

const StyledButton = glamorous.button ( {
  background: '#017B63',
  color: '#f6edeb',  
  border: '2px solid #f6edeb', 
  textDecoration: 'none', 
  padding: '.25em .5em',
  fontSize: '1.25em',
  fontWeight: 'bold',
  maxWidth: '100px', 
  fontFamily: 'Crimson Text', 
  ':hover' : {
    color: '#017B63',
    background: '#f6edeb', 
    border: '2px solid #017B63'   
  }
})

class ContactForm extends React.PureComponent {
  render() {
      

        const formStyle ={ 
          width: '35vw', 
          height: '50vh',       
          margin: '10vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-around', 
          alignItems: 'baseline',
        }

          const custInfoBlock = {
            display: 'flex', 
            flexDirection: 'row',
          }

            const nameBlock = {
              alignSelf: 'flex-start', 
            }

            const emailBlock = {
              marginLeft: '2em',
            }

            const textAreaStyle = {
              width: '100%',             
            }
            
    return (
      <div>          
          <section>        
            <form style={formStyle}> 
             
              <div style={custInfoBlock}>  
                <div style={nameBlock}>         
                  <StyledLabel>Name *</StyledLabel>
                  <input type="text" name="name" required />   
                </div> 
                <div style={emailBlock}> 
                  <StyledLabel>Email *</StyledLabel>       
                  <input type="text" name="email" required/>
                  </div> 
              </div> 

              <div> 
                <StyledLabel>Subject</StyledLabel>
                <input type="text" name="subject" />         
              </div>

              <div style={textAreaStyle}> 
                <StyledLabel>Your Message</StyledLabel>
                <textarea name="message" style={textAreaStyle} rows="8" ></textarea>
              </div>

              <StyledButton type="submit">Submit</StyledButton>
            </form>
          </section>
      </div>
    );
  }
}

export default ContactForm;
