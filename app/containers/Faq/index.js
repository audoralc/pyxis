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


export default class Faq extends React.PureComponent {
  render() {

     const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '1fr 50vh 50vh 50vh 50vh 10%', 
    }

      const h1Style = { 
       textAlign: 'center', 
      }

      const questionsBlock = {
        margin: '3em auto', 
        width: '90%',
        fontSize: '1.25em',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',  
      }


      const answersBlock = {
        margin: '10% auto', 
        width: '80%',
      }

    return (
      <div style={pageGrid}>
        <Helmet title="Faq" meta={[ { name: 'description', content: 'Description of Faq' }]}/>
        <Header></Header>
        <BodyContainer> 
          <h1 style={h1Style}> Frequently Asked Questions</h1>
          <section className="questions" style={questionsBlock}>
            <ol>
              <li><a href="#question_one">What can I expect in each box?</a></li>
              <li>How does my subscription work after I’ve paid for a subscription plan and set up an account?</li>
              <li>How does the automatic billing work for my subscription?</li>
              <li>Will I be charged sales tax and/or any fees on my subscription?</li>
              <li>When do you ship out the boxes each month?</li>
              <li>Do you ship internationally?</li>
              <li>Help! my box hasn't arrived.</li>
              <li>Can I return or exchange a box if I don’t like any of the products?</li>
              <li>How often can I skip a given box or renewal? </li>
              <li></li>
              <li><a href="#question_eleven">How do I cancel my subscription?</a></li>
            </ol>

             <img src="https://placeholdit.co//i/250x500" />
          </section>

          <section className="answers" style={answersBlock}> 
            <div classID="question_one">
              <h2>What can I expect in each box?</h2>
              <p></p>
            </div>
            <div>
              <h2>How does my subscription work after I’ve paid for a subscription plan and set up an account?</h2>
              <p></p>
            </div>
            <div>
              <h2>How does the automatic billing work for my subscription?</h2>
              <p></p>
            </div>
            <div>
              <h2>Will I be charged sales tax and/or any fees on my subscription?</h2>
              <p></p>
            </div>
            <div>
              <h2>What is your refund policy?</h2>
              <p></p>
            </div>
            <div>
              <h2>When do you ship out the boxes each month?</h2>
              <p></p>
            </div>
            <div>
              <h2>Do you ship internationally?</h2>
              <p></p>
            </div>
            <div>
              <h2>Help! my box hasn't arrived.</h2>
              <p></p>
            </div>
            <div>
              <h2>Can I return or exchange a box if I don’t like any of the products?</h2>
              <p></p>
            </div>
            <div>
              <h2>How often can I skip a given box or renewal? </h2>
              <p></p>
            </div>
            <div classID="question_eleven">
              <h2>How do I cancel my subscription?</h2>
              <p></p>
            </div>
          
          </section> 
        </BodyContainer>
        <Footer></Footer>
      </div>
    );
  }
}
