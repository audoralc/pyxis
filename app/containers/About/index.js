/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header'; 
import Footer from 'components/Footer'; 
import BodyContainer from 'components/BodyContainer'; 


export default class About extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 25vh 25vh 25vh 25vh 10%', 
    }  

    const h1Style = {
      margin: '5% auto 0 5%',      
      fontSize: '3em', 
      color: '#303030',  
    }

    const imgStyle ={ 
      margin: '2.5% auto 0 50%',
      
    }

    const textBlock = {
      width: '80%', 
      margin: '5% auto',
      textAlign: 'justify',
      fontSize: '1.15em', 
    }

    
    return (
      <div style={pageGrid}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <Header></Header>
        <BodyContainer>
          <section> 
            <h1 style={h1Style}> A couple of heathens had an idea...</h1>

            <img src="https://placeholdit.co//i/500x250" style={imgStyle} />

            <div style={textBlock}> 
              <p> So bruh, during the Renaissance Erasmus translated jar wrong from latin instead of jar he called Pandor's vessel a box, or pyxis, which I guess is a lot more ominous to most folks. The rest of us who have studied funeral urns find jars sufficiently ominous. </p>

              <p>here's where my hilarious and charming copy is going to be as soon as I find the motivation to write it all. I really wish we had been provided with some fluff but oh well that's the way the cookie crumbles and plus it'll be great to point to this site and be like "why yes I did write all the copy in addition to designing and coding all of the beauty you see>."</p>
              <p>See? The BS is already starting to flow. Now to figure out whether or not to put some kind of picture on here. </p> 
            </div>
            
          </section>         
        </BodyContainer>         
        <Footer></Footer>
      </div>
    );
  }
}
