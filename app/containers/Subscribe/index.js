/*
 *
 * Subscribe
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import BodyContainer from 'components/BodyContainer';
import Footer from 'components/Footer';
import glamorous from 'glamorous';
import { FaDollar } from 'react-icons/lib/fa';

const TierDiv = glamorous.div({
  background: '#FAFAFA',
  border: '2px solid #FAFAFA',
  padding: '3em 4em',
});

const TierSelect = glamorous.div({
  background: '#FAFAFA',
  border: '2px solid #303030',
  padding: '3em 4em',
});

export default class Subscribe extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      tierOne: false,
      tierTwo: false,
      tierThree: false,
    };
  } 

  handleTierOne = () => {
    if (this.state.tierOne === true) {
      this.setState({ tierOne: false });
    } else if (this.state.tierOne === false) {
      this.setState({ tierOne: true });
    }
  };

  handleTierTwo = () => {
    if (this.state.tierTwo === true) {
      this.setState({ tierTwo: false });
    } else if (this.state.tierTwo === false) {
      this.setState({ tierTwo: true });
    }
  };

  handleTierThree = () => {
    if (this.state.tierThree === true) {
      this.setState({ tierThree: false });
    } else if (this.state.tierThree === false) {
      this.setState({ tierThree: true });
    }
  };

  handleTierOneSelect = () => {
    if (this.state.tierOne === false) {
      return (
        <TierDiv onClick={this.handleTierOne}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier One </h3>
        </TierDiv>
      );
    } else if (this.state.tierOne === true) {
      return (
        <TierSelect onClick={this.handleTierOne}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier One </h3>
        </TierSelect>
      );
    }
  }

  handleTierTwoSelect = () => {
    if (this.state.tierTwo === false) {
      return (
        <TierDiv onClick={this.handleTierTwo}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier Two </h3>
        </TierDiv>
      );
    } else if (this.state.tierTwo === true) {
      return (
        <TierSelect onClick={this.handleTierTwo}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier Two </h3>
        </TierSelect>
      );
    }
  }

  handleTierThreeSelect = () => {
    if (this.state.tierThree === false) {
      return (
        <TierDiv onClick={this.handleTierThree}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier Three </h3>
        </TierDiv>
      );
    } else if (this.state.tierThree === true) {
      return (
        <TierSelect onClick={this.handleTierThree}>
          <div><FaDollar> </FaDollar></div>
          <h3> Tier Three </h3>
        </TierSelect>
      );
    }
  }
  render() {
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 50vh 50vh auto auto 10%',
    };
    const titleBlock = {
      textAlign: 'center',
      marginTop: '5%',
    };

    const tierGroup = {
      display: 'flex',
      flexDirection: 'row',
      margin: '10% 5%',
      justifyContent: 'space-around',
    };


    return (
      <div style={pageGrid}>
        <Helmet title="Subscribe" meta={[{ name: 'description', content: 'Description of Cart' }]} />
        <Header></Header>

        <BodyContainer>
          <h2 style={titleBlock}> Pick a size: </h2>
          <section style={tierGroup}>
            {this.handleTierOneSelect()}
            {this.handleTierTwoSelect()}
            {this.handleTierThreeSelect()}
          </section>

        </BodyContainer>

        <Footer></Footer>

      </div>
    );
  }
}
