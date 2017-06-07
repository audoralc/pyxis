/**
*
* HomeHeadingContainer
*
*/

import React from 'react';
import Header from 'components/Header'; 
/* Header witin the HomeHeadingContainer keeps bg colors */ 

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
                                                   
          } 

            const h1Style = {
              margin: '0',
              color: '#303030', 
            }

            const h2Style ={ 
              margin: '.5em 0', 
              color: '#017B63',
              fontStyle: 'italic', 
            }

            const imgStyle = {                
                 height: '40%', 
                 float: 'right',
                 marginTop: '-25%',
                 marginBottom: '-5%',    
            }

        
   
    return (      
        <div style={bodyStyle}> 
          <Header></Header> 

          <div style={leftStyle}>           

            <div style={insetBoxRibbon}>
             <img src="https://68.media.tumblr.com/4afaa584f8f498c8939821bf42c8ad7e/tumblr_n6d6xxHH7n1qd42nao1_500.jpg" height="80%" />
             
              </div> 
                  <img src="http://i.imgur.com/Ez7kdHg.png" style={imgStyle} />                    
            </div>          
         
          
          <div style={rightStyle}>
               <div style={headerBlock}> 
                <h1 style={h1Style}> man's folly is your gain </h1>
                <h2 style={h2Style}> bespoke luxury boxes based on the 7 sins </h2>                  

          </div>
          
          </div>
          
        </div>
        
    );
  }
}

export default HomeHeadingContainer;
