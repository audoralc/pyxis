/**
*
* Faqquestions
*
*/

import React from 'react';
import ReactPlaceholder from 'react-placeholder'; 
import glamorous from 'glamorous'; 
import { Accordion, AccordionItem } from 'react-sanfona';
import { FaAngleDown } from 'react-icons/lib/fa/angle-double-down';

const AnswersBlock = glamorous.section ({
      margin: '5% auto', 
      width: '80%',
})

class Faqquestions extends React.PureComponent {
  render() {

    const questionStyle = {
      margin: '4em 0',
      fontSize: '1.25em',
      borderBottom: '2px solid #000000',
    } 

    return (
      <AnswersBlock>

          <Accordion> 

            <AccordionItem title="What can I expect in each box? +" style={questionStyle}>              
            <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>  
           
            <AccordionItem title="How does my subscription work after I’ve paid for a subscription plan and set up an account? +" style={questionStyle}> 
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>  
           
            <AccordionItem title="How does the automatic billing work for my subscription? +" style={questionStyle}> 
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>          

            <AccordionItem title="Will I be charged sales tax and/or any fees on my subscription? +" style={questionStyle}>
            <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>       

            <AccordionItem title="What is your refund policy? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>              
            
            <AccordionItem title="When do you ship out the boxes each month? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>      

            <AccordionItem title="Do you ship internationally? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="Help! my box hasn't arrived. +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="Can I return or exchange a box if I don’t like any of the products? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="How often can I skip a given box or renewal? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="How do I cancel my subscription? +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>         

            <AccordionItem title="Sgt Pepper's Lonely Hearts Club +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>    

            <AccordionItem title="The White Album +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>     

            <AccordionItem title="Magical Mystery Tour +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>         

            <AccordionItem title="Rubber Soul +" style={questionStyle}>
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>

         </Accordion> 
      </AnswersBlock>
    );
  }
}

export default Faqquestions;
