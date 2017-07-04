/**
*
* HowItWorks
*
*/

import React from 'react';
import glamorous from 'glamorous'; 

const Delivery = glamorous.div({ 
  borderRight: '2px solid #0c3a7f',
  borderLeft: '2px solid #0c3a7f',  
  padding: '.5em',
  fontSize: '1.15em',
})

class HowItWorks extends React.PureComponent {
  render() {
    const ribbonStyle = {
       background: '#303030', 
        gridRow: ' 4 / 4', 
        gridColumn: '1 / 6 span',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',  
    }

        const months = {           
            background: '#017B63',
            color: '#FFECDB',            
            margin: '0',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            padding: '3em', 
            justifyContent: 'space-between',
            
          } 

          const heading = {
            color: '#FAFAFA',
            textAlign: 'center',

          }
          const h3Style = {
            float: 'right',
            margin: '2em 25% 0 0', 
            fontSize: '1.5em',
          }
          const svgPos = {
            float: 'left',
            margin: '1em',
          }

    return (
      <div style={ribbonStyle}>
                  
          <div style={heading}>
             
             
             <span><h3 style={h3Style}> we do things in 7's - your items delivered 7x a year</h3> </span> 
            <div style={svgPos}> <svg x="0px" y="0px"
	 width="150px" height="150px" viewBox="0 0 481.083 481.083">
<g>
	<g>
		<path d="M466.474,314.693c-7.675-3.647-21.885-6.894-46.002-1.642c-1.667,0.306-112.113,19.947-132.733,23.652
			c-3.178,0.57-5.119,4.43-5.119,4.43c-40.774,62.781-105.437,17.883-105.142,16.967c36.45,10.105,67.417-3.995,79.028-17.938
			c27.118-32.562-15.759-37.398-38.477-42.924c-85.094-20.693-88.682,0.514-137.964,5.199L4.522,313.136
			c-1.712,0.519-3.128,1.734-3.899,3.349c-0.772,1.614-0.83,3.479-0.16,5.138l3.051,7.545c7.604,18.809,15.251,46.834,23.292,65.875
			c0.517,1.227,1.407,2.262,2.544,2.957c0.252,0.154,0.589,0.344,1.011,0.545c1.508,0.717,3.208,1.143,4.595,1.141l53.686-1.061
			c2.814-0.018,122.088,69.213,179.354,46.277l178.373-79.97c7.098-3.359,14.436-6.832,21.741-10.207
			c7.973-3.683,12.927-12.146,12.972-20.372C481.129,325.753,475.685,319.07,466.474,314.693z" fill="#f6edeb" />
		<path d="M96.832,111.858h5.355v128.519c0,9.859,7.993,17.852,17.853,17.852h241.001c9.859,0,17.852-7.993,17.852-17.852V111.858
			h5.356c4.931,0,8.927-3.997,8.927-8.926V40.451c0-4.93-3.996-8.926-8.927-8.926H96.832c-4.93,0-8.926,3.996-8.926,8.926v62.482
			C87.906,107.861,91.901,111.858,96.832,111.858z M220.457,57.521h40.167c7.888,0,14.282,6.395,14.282,14.282
			c0,7.888-6.396,14.281-14.282,14.281h-40.167c-7.887,0-14.281-6.394-14.281-14.281C206.175,63.916,212.569,57.521,220.457,57.521z
			" fill="#f6edeb"/>
	</g>
</g>
</svg>
</div>
</div>   
            <div style={months}>
              <Delivery>
               <p> Feb </p>
              </Delivery>

              <Delivery>
                <p>Mar-Apr</p>
              </Delivery> 

              <Delivery>
                <p> May-June</p>
              </Delivery> 

              <Delivery>
                <p>June-Jul</p>
              </Delivery>  
              
              <Delivery>
                <p>Jul-Aug</p>
              </Delivery>

              <Delivery>
                <p>Sept-Oct</p>
              </Delivery> 

              <Delivery>
                <p> Nov </p>
              </Delivery> 
            </div> 
      </div>
    );
  }
}

export default HowItWorks;