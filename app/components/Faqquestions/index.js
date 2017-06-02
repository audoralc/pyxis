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

const QuestionBlock = glamorous.div ({ 

})


class Faqquestions extends React.PureComponent {
  render() {
    return (
      <AnswersBlock>

          <Accordion> 

            <AccordionItem title="What can I expect in each box?">              
            <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>  
           
            <AccordionItem title="How does my subscription work after I’ve paid for a subscription plan and set up an account?"> 
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>  
           
            <AccordionItem title="How does the automatic billing work for my subscription?"> 
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>          

            <AccordionItem title="Will I be charged sales tax and/or any fees on my subscription?">
            <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>       

            <AccordionItem title="What is your refund policy?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>              
            
            <AccordionItem title="When do you ship out the boxes each month?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>      

            <AccordionItem title="Do you ship internationally?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="Help! my box hasn't arrived.">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="Can I return or exchange a box if I don’t like any of the products?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="How often can I skip a given box or renewal?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>            

            <AccordionItem title="How do I cancel my subscription?">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>         

            <AccordionItem title="">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>    

            <AccordionItem title="">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>     

            <AccordionItem title="">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>         

            <AccordionItem title="">
              <p><ReactPlaceholder type='text' rows={6}></ReactPlaceholder></p>
            </AccordionItem>
          


         </Accordion> 
      </AnswersBlock>
    );
  }
}

export default Faqquestions;
