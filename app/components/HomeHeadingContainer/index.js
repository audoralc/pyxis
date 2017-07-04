/**
*
* HomeHeadingContainer
*
*/

import React from 'react';
import Header from 'components/Header'; 
import glamorous from 'glamorous'; 

const PicDiv = glamorous.div({
  width: '60%', 
  position: 'relative', 
  margin: '5% auto',
})

 
  const StyledImg = glamorous.img({
    ':hover' : {       
      opacity: '1',  
    }, 
    display: 'block', 
    height: 'auto', 
    width: '100%',
    transition: 'all 0.3s', 
    backgroundColor: '#979216', 
  })

  const Overlay1 = glamorous.div({
    ':hover' : { 
      opacity: '0', 
    },     
      position: 'absolute',
      top: '0', 
      left: '0', 
      height: '100%',
      width: '100%',
      opacity: '.75',
      transition: '.5s ease',
      backgroundColor: '#434343',     
  })





class HomeHeadingContainer extends React.PureComponent {
  render() {
    const bodyStyle = {
      gridColumn: '1 / span 6', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '10% 1fr 1fr 1fr', 
      height: '100%', 
    }

      const leftStyle = {
        gridRow: '2 / 4 span', 
        gridColumn: '1 / 3 span', 
        background: '#4d3b3b',             
      }

        const insetBoxRibbon = {
          background: '#FFECDB', 
          margin: '5% 10% 0 10%',          
          height: '75vh',
          width: '65%',        
        }          

      const rightStyle= { 
        gridRow: '2 / 4 span',
        gridColumn: '4 / 6 span',
        background: '#f6edeb',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
      }

        const headerBlock = {
            padding: '2em', 
            fontFamily: '"Crimson Text", serif',                                       
          } 

            const h1Style = {
              margin: '0',
              color: '#000000',
              fontSize: '3em',  
            }

            const h2Style ={ 
              margin: '.5em 0', 
              color: '#017B63',
              fontStyle: 'italic', 
            }

            const logoStyle = {              
                 float: 'right',
                 marginTop: '-30%', 
            }
   
   
    const currentBoxDes = {
        color: '#fafafa',
        textAlign: 'center', 
        padding: '1em',
    }

    const currentTitleStyle = {
      color: '#0c3a7f',
      fontFamily: 'Crimson Text, serif',
      textAlign: 'center', 
      fontSize: '1.75em',
    }
      
    return (      
        <div style={bodyStyle}> 
          <Header></Header> 

          <div style={leftStyle}>           

            <div style={insetBoxRibbon}>
             <img src="https://68.media.tumblr.com/4afaa584f8f498c8939821bf42c8ad7e/tumblr_n6d6xxHH7n1qd42nao1_500.jpg" height="80%" />
             
              </div>
              <div> 
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="400.000000pt" height="400.000000pt" viewBox="0 0 400.000000 400.000000" preserveAspectRatio="xMidYMid meet" height="40%" width="40%" style={logoStyle}>
                  <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" >
                  <path d="M673 3307 c-365 -198 -663 -363 -663 -366 0 -4 147 -88 326 -188 l325 -181 -138 -76 c-76 -41 -220 -119 -320 -173 -100 -54 -182 -101 -183 -104 0 -4 142 -82 315 -175 l315 -169 2 -435 3 -435 673 -338 672 -337 673 337 672 338 5 435 5 435 317 170 c235 126 314 173 304 180 -7 6 -151 84 -319 175 -255 137 -303 167 -290 177 8 6 152 87 319 180 167 92 304 171 304 174 0 7 -1311 722 -1325 722 -5 0 -155 -79 -333 -177 l-324 -176 -296 161 c-163 89 -315 172 -337 184 l-40 23 -662 -361z m889 32 c123 -67 229 -125 236 -129 9 -4 -170 -105 -473 -268 l-487 -262 -229 128 c-126 70 -229 129 -229 132 1 5 941 519 952 519 3 1 107 -54 230 -120z m1588 -149 c258 -140 469 -257 469 -260 1 -3 -103 -62 -229 -132 l-229 -127 -486 261 c-453 243 -485 262 -463 274 12 7 118 64 233 128 116 64 216 115 223 113 7 -1 224 -117 482 -257z m-1742 -1005 c233 -125 419 -232 415 -236 -4 -4 -109 -62 -232 -129 -136 -73 -231 -118 -240 -115 -37 14 -951 508 -951 514 0 3 105 63 233 133 l232 127 60 -33 c33 -18 250 -135 483 -261z m1965 165 c125 -67 229 -125 231 -129 5 -8 -943 -516 -964 -515 -8 0 -116 56 -239 123 -192 106 -221 125 -205 135 95 55 940 513 944 511 3 -1 107 -57 233 -125z m-1463 -1164 l0 -605 -402 198 c-222 109 -463 228 -535 265 l-133 66 0 331 0 330 118 -62 c64 -35 182 -98 261 -140 l145 -78 60 34 c34 19 153 86 266 149 113 63 208 115 213 115 4 1 7 -271 7 -603z m471 450 l259 -145 188 101 c103 55 220 118 260 140 l72 39 0 -330 0 -331 -152 -76 c-84 -42 -325 -161 -535 -265 l-383 -188 0 606 c0 540 2 605 15 599 9 -3 133 -71 276 -150z" />
                  </g>
                  </svg> 
                </div> 
            </div>          
         
          
          <div style={rightStyle}>
               <div style={headerBlock}> 
                  <h1 style={h1Style}> man's folly is your gain </h1>
                  <h2 style={h2Style}> bespoke luxury boxes based on the 7 sins </h2>    
              </div>                   
            
            <div> 
            <h2 style={currentTitleStyle}> Current Box </h2>    
            <PicDiv>             
              <StyledImg src="http://i.imgur.com/U14PRQb.png"/> 

              <Overlay1>
                <div style={currentBoxDes}> 
                  <h3> Midsummer (Late June - Early July) </h3>
                  <h4> GREED </h4>
                  <p>All that glitters lies within this box. Luxurious items made of luxurious materials. </p> 
                </div> 
              </Overlay1>          
            </PicDiv>
          </div> 
              
        
          </div>
          
        </div>
        
    );
  }
}

export default HomeHeadingContainer;
