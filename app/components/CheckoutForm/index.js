/* CheckoutForm

*/
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from 'components/CardSection';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class CheckoutForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      deliverCity: '',
      name: '',
      country: 'United States',
      deliverCountry: 'United States',
      password: '',
      email: '',
      value: 'Alabama',
      deliverState: '',
      deliverZipCode: '',
      address: '',
      deliverAddress: '',
      plan: 'tierOne',
      checkBox: false,
    };
  }
  handleState = (event, index, value) => {
    this.setState({ value });
    this.setState({ country: value });
  };

  handleDeliverState = (ev) => {
    this.setState({ deliverState: ev.target.value });
  }

  handleName = (ev) => {
    this.setState({ name: ev.target.value });
  }

  handlePassword = (ev) => {
    this.setState({ password: ev.target.value });
  }

  handleEmail = (ev) => {
    this.setState({ email: ev.target.value });
  }

  handleCity = (ev) => {
    this.setState({ city: ev.target.value });
  }

  handleDeliverCity = (ev) => {
    this.setState({ deliverCity: ev.target.value });
  }

  handleBillingAddress = (ev) => {
    this.setState({ address: ev.target.value });
  }

  handleDeliverAddress = (ev) => {
    this.setState({ deliverAddress: ev.target.value });
  }

  handleDeliverZip = (ev) => {
    this.setState({ deliverZipCode: ev.target.value });
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({
      name: this.state.name,
      address_city: this.state.city,
      address_country: this.state.country,
      address_line1: this.state.address,
      address_state: this.state.value,
    }).then(({ token }) => {
      const data = new FormData();
      data.append('username', this.state.name);
      data.append('email', this.state.email);
      data.append('password', this.state.password);
      data.append('billingAddress', this.state.address);
      data.append('billingZipCode', token.card.address_zip);
      data.append('billingCity', this.state.city);
      data.append('billingCountry', this.state.country);
      data.append('useBillingAddress', this.state.checkBox);
      data.append('customerToken', token.id);
      data.append('plan', 'tierOne');
      if (this.state.checkBox === false) {
        data.append('deliverAddress', this.state.deliverAddress);
        data.append('deliverZipCode', this.state.deliverZipCode);
        data.append('deliverCity', this.state.deliverCity);
        data.append('deliverCountry', this.state.deliverCountry);
      }
      fetch('http://localhost:8000/api/signUp', {
        method: 'post',
        body: data,
      }).then((response) => {
        return response.json();
      }).then((json) => {
        if (json.success) {
          alert(json.success);
        } else if (json.error) {
          alert(json.error);
        }
      });
    });
  }

  handleSubmitTwo = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({
      name: this.state.name,
      address_city: this.state.city,
      address_country: this.state.country,
      address_line1: this.state.address,
      address_state: this.state.value,
    }).then(({ token }) => {
      const data = new FormData();
      data.append('username', this.state.name);
      data.append('email', this.state.email);
      data.append('password', this.state.password);
      data.append('billingAddress', this.state.address);
      data.append('billingZipCode', token.card.address_zip);
      data.append('billingCity', this.state.city);
      data.append('billingCountry', this.state.country);
      data.append('useBillingAddress', this.state.checkBox);
      data.append('customerToken', token.id);
      data.append('plan', 'tierTwo');
      if (this.state.checkBox === false) {
        data.append('deliverAddress', this.state.deliverAddress);
        data.append('deliverZipCode', this.state.deliverZipCode);
        data.append('deliverCity', this.state.deliverCity);
        data.append('deliverCountry', this.state.deliverCountry);
      }
      fetch('http://localhost:8000/api/signUp', {
        method: 'post',
        body: data,
      }).then((response) => {
        return response.json();
      }).then((json) => {
        if (json.success) {
          alert(json.success);
        } else if (json.error) {
          alert(json.error);
        }
      });
    });
  }

  handleSubmitThree = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({
      name: this.state.name,
      address_city: this.state.city,
      address_country: this.state.country,
      address_line1: this.state.address,
      address_state: this.state.value,
    }).then(({ token }) => {
      const data = new FormData();
      data.append('username', this.state.name);
      data.append('email', this.state.email);
      data.append('password', this.state.password);
      data.append('billingAddress', this.state.address);
      data.append('billingZipCode', token.card.address_zip);
      data.append('billingCity', this.state.city);
      data.append('billingCountry', this.state.country);
      data.append('useBillingAddress', this.state.checkBox);
      data.append('customerToken', token.id);
      data.append('plan', 'tierThree');
      if (this.state.checkBox === false) {
        data.append('deliverAddress', this.state.deliverAddress);
        data.append('deliverZipCode', this.state.deliverZipCode);
        data.append('deliverCity', this.state.deliverCity);
        data.append('deliverCountry', this.state.deliverCountry);
      }
      fetch('http://localhost:8000/api/signUp', {
        method: 'post',
        body: data,
      }).then((response) => {
        return response.json();
      }).then((json) => {
        if (json.success) {
          alert(json.success);
        } else if (json.error) {
          alert(json.error);
        }
      });
    });
  }

  handleCheckBox = () => {
    if (this.state.checkBox === true) {
      this.setState({ checkBox: false });
    } else if (this.state.checkBox === false) {
      this.setState({ checkBox: true });
    }
  }

  handleDeliverAddress = () => {
    if (this.state.checkBox === false) {
      return (
        <div style={{ marginTop: '10%' }}>
          <h1>Delivery Address</h1>

          <div style={{ marginTop: '5%' }}>
            <form>
              <SelectField onChange={this.handleDeliverState} maxHeight={200} menuStyle={{ background: 'white', height: '78%' }} value={this.state.value}>
                {countryDropdown}
              </SelectField>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form>

              <input onChange={this.handleDeliverCity} placeholder=" Deliver City" />
              <br />

              <input onChange={this.handleDeliverAddress} placeholder=" Deliver Address" />
              <br />

              <input onChange={this.handleDeliverZip} placeholder=" Deliver Zipcode" />
              <br />
            </form>
          </div>
        </div>
      );
    }
  }
  render() {
    const bodyStyle = {
      height: '100%',
      background: '#f6edeb',
    };
    const selectStyle = {
      background: 'white',
      height: '78%',
    };
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '1.9em',
      fontWeight: 'bold',
      marginBottom: '5%',
    };
    const belowDropDownStyle = {
      display: 'flex',
      flexDirection: 'column',
    };
    const buttonStyle = {
      backgroundColor: '#4CAF50', /* Green */
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
    };
    const tierStyle = {
      display: 'flex',
      flexDirection: 'column',
    };

    return (
      <div style={bodyStyle}>
        <div style={formStyle}>Contacts Info</div>
        <div>
          <form>

            <div style={tierStyle}>
              Name
              <input type="text" onChange={this.handleName} placeholder="name" />
              <br />
            </div>

            <div style={tierStyle}>
              Email
              <input onChange={this.handleEmail} placeholder="Email" />
              <br />
            </div>

            <div style={tierStyle}>
              Password
              <input type="text" onChange={this.handlePassword} placeholder="password" />
              <br />
            </div>

          </form>
        </div>

        <div>
          <div style={formStyle}>Billing Address</div>
          <form>
            <SelectField menuStyle={selectStyle} value={this.state.value} onChange={this.handleState} maxHeight={200}>
              {countryDropdown}
            </SelectField>
          </form>
        </div>

        <div style={belowDropDownStyle}>
          <form>

            <div style={tierStyle}>
              City
              <input onChange={this.handleCity} placeholder="City" />
              <br />
            </div>

            <div style={tierStyle}>
              Address
              <input onChange={this.handleBillingAddress} placeholder="Address" />
              <br />
            </div>

          </form>

          <form>
            Credit Card Information
            <CardSection />
          </form>

        </div>

        Use billing address as shipping address?

        <input type="checkbox" onChange={this.handleCheckBox} text="Submit" />
        {this.handleDeliverAddress()}

        <div style={tierStyle}>
          Tier One
          <button style={buttonStyle} onTouchTap={this.handleSubmit}>
            Submit
          </button>

          TierTwo
          <button style={buttonStyle} onTouchTap={this.handleSubmitTwo}>
            Submit
          </button>

          TierThree
          <button style={buttonStyle} onTouchTap={this.handleSubmitThree}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const countryDropdown = [];
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

for (let i = 0; i < 50; i++) {
  countryDropdown.push(
    <MenuItem value={states[i]} key={i} primaryText={states[i]} />
  );
}
export default injectStripe(CheckoutForm);

