/*
 *
 * Faq
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import BodyContainer from 'components/BodyContainer';
import Faqquestions from 'components/Faqquestions'; 



export default class Faq extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr auto auto auto auto 10%', 
    }

      const headerBlock = { 
       marginTop: '5%',
       textAlign: 'center',
       zIndex: '2',        
      }    

        const imageStyle = {
          
        }

    return (
      <div style={pageGrid}>
        <Helmet title="Faq" meta={[ { name: 'description', content: 'Description of Faq' }]}/>
        <Header></Header>

        <BodyContainer> 
          <div style={headerBlock}>
          <h1>Frequently Asked Questions</h1>

          <img src="https://placeholdit.co//i/500x250" style={imageStyle}/>
          </div> 

          <Faqquestions> </Faqquestions>     

        </BodyContainer>

        <Footer></Footer>

      </div>
    );
  }
}
