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

export default class Contact extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh 50vh 50vh 10%', 
    }

        const headerBlock ={  
          textAlign: 'center', 
        }

        const formStyle ={ 
          width: '80%',
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
        }

    return (
      
      <div style={pageGrid}>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
        <Header></Header>
        <BodyContainer> 
          <section> 

            <div className="header_block" style={headerBlock}> 
            <h1> Get in touch</h1>
            <h2>yes hello this will be clever whenever I get to writing copy</h2>
            </div>

            <form style={formStyle}>              
              <p><label>First Name *</label>
              <input type="text" name="first-name" required/>
              <label>Last Name *</label>
              <input type="text" name="last-name" required/>
              </p>
              
              <p>              
              <label>Email *</label>
              <input type="text" name="email" required/>
              </p>

              <p>
              <label>Subject</label>
              <input type="text" name="subject" />
              </p>

              <textarea name="message" placeholder="message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </section>

        </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
