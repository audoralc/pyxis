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
          margin: '5% 10% 10% 10%',          
          height: '75vh',  
        }          

      const rightStyle= { 
        gridRow: '2 / 4 span',
        gridColumn: '4 / 6 span',
        background: '#f6edeb',
        padding: '2em',       
      }

        const headerBlock = {
            gridRow: '3 / 4',
            gridColumn: '3 / 5 span',
            zIndex: '2', 
            marginTop: '-10vh',                           
          } 

            const h1Style = {
              margin: '0', 
            }

            const h2Style ={ 
              margin: '0', 
            }

           
   
    return (      
        <div style={bodyStyle}> 
          <Header></Header> 

          <div style={leftStyle}>           

            <div style={insetBoxRibbon}>
             <img src="https://68.media.tumblr.com/4afaa584f8f498c8939821bf42c8ad7e/tumblr_n6d6xxHH7n1qd42nao1_500.jpg" height="80%" />
              </div>                            
            </div>

            
           <div style={headerBlock}> 
                <h1 style={h1Style}> TITLE TITLE TITLE TITLE TITLE</h1>
                <h2 style={h2Style}> subtitle subtitle subtitle subtitle            </h2>
          </div> 
          
          <div style={rightStyle}>
          
          </div>

        </div>
        
    );
  }
}

export default HomeHeadingContainer;
