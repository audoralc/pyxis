/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import BodyContainer from 'components/BodyContainer'; 
import ContactForm from 'components/ContactForm';
import glamorous from 'glamorous'; 

const ContactInfo = glamorous.section({
  background: '#28a28a',
  padding: '2em', 
  fontSize: '1.25em',

}) 

export default class Contact extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr auto auto auto auto 10%',
    }
      const bodyReset = {
        display: 'flex', 
        flexDirection: 'row', 
      }
      
        const headerBlock ={  
            textAlign: 'center',          
          }
     
    return (
      
      <div style={pageGrid}>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
        <Header></Header>
        <BodyContainer> 
          <div className="header_block" style={headerBlock}> 
            <h1> Get in touch</h1>
            <h2>yes hello this will be clever whenever I get to writing copy</h2>
          </div>  

          <div style={bodyReset}>             
            <ContactForm> </ContactForm>

            <div> 
              <ContactInfo> 
                <address> 
                  1530 Hesiod Way <br/>
                  Elpis, GA 33333 <br />
                  <a href="mailto:help@pyxis.com"> help@pyxis.com </a>
                </address>
              </ContactInfo>

              <section > </section>
            </div>          
          </div>
        </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
