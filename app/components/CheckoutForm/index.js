/* CheckoutForm

*/
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from 'components/CardSection';



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
      tier: false, 
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
        <div>
          <h1>Delivery Address</h1> 
          <div> 
              <label>   
                <span>Address</span>        
                <input onChange={this.handleDeliverAddress} />
              </label> 

              <label> 
                <span>City</span>  
                <input onChange={this.handleDeliverCity} />   
              </label> 

              <label> 
                <span>State</span>
                <select>
                  {countryDropdown}
                </select>         
              </label>    

              <label> 
                <span>Zip Code</span> 
              <input onChange={this.handleDeliverZip} /> </label> 
          </div>
        </div>
      );
    }
  }
  render() {  
    const checkoutWrapper = {
      margin: '10%',
    }

      const cardFormStyle = {
        display: 'flex', 
        flexDirection: 'column', 
      }
         

    return (
      <div style={checkoutWrapper}>  
      <div>   
        <section> 
        <h2> what you selected</h2>
        </section>

        <section>
          <div>
            <h2> Billing Address </h2>

              <label> 
                <span> Address </span>
              <input onChange={this.handleBillingAddress} />
              </label>

              <label> 
                <span>City</span>
                <input onChange={this.handleCity} />
              </label>

              <label> 
                <span> State </span> 
                <select>{countryDropdown}</select> 
              </label>  

              <label>
                <span>ZIP Code</span>
                <input name="address-zip" className="field" placeholder="94110" />
              </label>

              <div>
                <span> Use billing address as shipping address? </span>
                <input type="checkbox" onChange={this.handleCheckBox} />
                {this.handleDeliverAddress()}
              </div>
            </div> 
            
          <div style={cardFormStyle}> 
              <h2> Credit Card Information </h2>              
                <form>
                  <label>
                    <span>Name</span>
                    <input name="cardholder-name" className="field" placeholder="Jane Doe" onChange={this.handleName}/>
                  </label>

                  <label>
                    <span>Phone</span>
                    <input className="field" placeholder="(123) 456-7890" type="tel" />
                  </label>

                  <label>
                    <span>ZIP code</span>
                    <input name="address-zip" className="field" placeholder="94110" />
                  </label>

                  <label>
                    <span>Card</span>
                    <div id="card-element" className="field">
                      <CardSection />  
                    </div>
                  </label>

                  <button type="submit">Submit</button>
                </form>                 
            </div> 

        </section>  
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
    <option> value={states[i]} key={i} primaryText={states[i]}  </option> 
  );
}
export default injectStripe(CheckoutForm);

