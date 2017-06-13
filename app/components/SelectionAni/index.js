/**
*
* SelectionAni
*
*/

import React from 'react';
import glamorous from 'glamorous'; 
import { FaDollar } from 'react-icons/lib/fa'; 

class SelectionAni extends React.PureComponent {
  constructor(props) {
    super(props); 
    this.state = {
      tier: false, 
    }; 
  };

 handleTier = () => {
    if (this.state.tier === true) {
    this.setState({ tier:false }); 
  } else if (this.state.tier === false) {
    this.setState({ tier:true }); 
      }  
  };

  handleTierSelect = () => {
  
    

    const TierDiv = glamorous.div({ 
      background: '#FAFAFA',
      border: '2px solid #FAFAFA',
      padding: '3em 4em', 
    }); 

    const TierSelect = glamorous.div({
      background: '#FAFAFA',
      border: '2px solid #303030', 
      padding: '3em 4em', 
    }) ;


  if (this.state.tier === false) { 
    return (       
           <TierDiv onClick={this.handleTier}> 
              {this.props.children}
            </TierDiv>          
    )
  } else if (this.state.tier === true) {
      return (       
          <TierSelect onClick={this.handleTier}> 
            {this.props.children}
          </TierSelect>         
      )
    }
  }

  render() {



    return (
      <div>
       {this.handleTierSelect()}
      </div>
    );
  }
}

export default SelectionAni;
