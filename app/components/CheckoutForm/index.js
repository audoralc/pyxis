/* CheckoutForm

*/
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from 'components/CardSection';
import glamorous from 'glamorous'; 

const StyledLabel = glamorous.label ({
  display: 'flex', 
  flexDirection: 'row',
  width: '50%', 
  justifyContent: 'space-between'})

const StyledSpan = glamorous.span ({ 
  marginRight: '1em',
})

const SubButton = glamorous.button({ 
  background: '#0c3a7f',
  textDecoration: 'none',
  border: '2px solid #f6edeb',  
  color: '#f6edeb',   
  padding: '.25em .5em',
  fontSize: '1.25em',  
  ':hover' : {
    color: '#017B63',
    border: '2px solid #017B63',
    background: '#f6edeb',
  }
})

const AddRow = glamorous.div({
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'space-between',
  width: '70%', 
})

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
    
  const deliverySection = {
    marginTop: '5vh',
  }
    
    const deliveryBlock = {
      display: 'flex', 
      flexDirection: 'column',          
      justifyContent: 'space-around',  
      height: '10vh',
    };

    if (this.state.checkBox === false) {
      return (
        <section style={deliverySection}> 
          <h2>Delivery Address</h2> 

          <div style={deliveryBlock}>
          
          <AddRow> 
                <label> 
                  <StyledSpan> Address </StyledSpan>
                <input onChange={this.handleBillingAddress} />
                </label>

                <label> 
                  <StyledSpan>City</StyledSpan>
                  <input onChange={this.handleCity} />
                </label>
            </AddRow> 

            <AddRow>  
                <label> 
                  <StyledSpan> State </StyledSpan> 
                  <select>{countryDropdown}</select> 
                </label>  
           

                <label>
                  <StyledSpan>ZIP Code</StyledSpan>
                  <input name="address-zip" className="field" placeholder="94110" />
                </label>
              </AddRow> 
              </div>
        </section>
      );
    }
  }
  render() {  
    const yourSelection = {
      width: '100%',
      height: '20vh', 
      borderTop: '2px solid #303030',
      borderBottom: '2px solid #303030',
      margin: '5vh 0 0 0',
    }
    const checkoutWrapper = {
      margin: '2.5% 0 0 10%',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between',
    }

        const billingAddressBlock = {
          display: 'flex', 
          flexDirection: 'column',          
          justifyContent: 'space-around',  
          height: '10vh',
        }

          const addressToggle = {
            marginTop: '2.5vh',
          }
    
      const cardFormStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        margin: '5vh 0',
        width: '90%',
      }

        const cardInfo = {
          display: 'flex', 
          flexDirection: 'column', 
          flexWrap: '1', 
          justifyContent: 'space-between',
          marginBottom: '1em',
          height: '15vh',  
        }

        const cardSection = {
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-around',
          height: '8vh',
          width: '60%',
          marginBottom: '1em', 
        }

      const submitBlock = {
        marginTop: '10vh',
        textAlign: 'center',
      }
    

    return (
      <div> 

        <section style={yourSelection}> 
          <div> </div>
          <div> </div>
          <div> </div>
        </section> 

        <div style={checkoutWrapper}>        
          <section >

              <h2> Billing Address </h2>

            <div style={billingAddressBlock}>

                <AddRow>  
                      <label> 
                        <StyledSpan> Address </StyledSpan>
                      <input onChange={this.handleBillingAddress} />
                      </label>

                      <label> 
                        <StyledSpan>City</StyledSpan>
                        <input onChange={this.handleCity} />
                      </label>
                </AddRow>

                <AddRow> 
                        <label> 
                          <StyledSpan> State </StyledSpan> 
                          <select>{countryDropdown}</select> 
                        </label>  

                        <label>
                          <StyledSpan>ZIP Code</StyledSpan>
                          <input name="address-zip" className="field" placeholder="94110" />
                        </label>
                </AddRow> 

            </div> 

                <div style={addressToggle}>
                        <span> Use billing address as shipping address? </span>
                        <input type="checkbox" onChange={this.handleCheckBox} />
                        {this.handleDeliverAddress()}
                </div>
                
            </section> 
              
            <section style={cardFormStyle}> 
                <h2> Credit Card Information </h2>              
                  <form>
                    <div style={cardInfo}> 
                      <StyledLabel>
                        <span>Name</span>
                        <input name="cardholder-name" className="field" placeholder="Jane Doe" onChange={this.handleName}/>
                      </StyledLabel>

                      <StyledLabel>
                        <span>Phone</span>
                        <input className="field" placeholder="(123) 456-7890" type="tel" />
                      </StyledLabel>

                      <StyledLabel>
                        <span>ZIP Code</span>
                        <input name="address-zip" className="field" placeholder="94110" />
                      </StyledLabel>
                      </div>

                      <div style={cardSection}>
                        <label>
                          <span>Card</span>
                        </label>
                          <div id="card-element" className="field">
                            <CardSection />  
                          </div>
                      
                      </div> 

                    <div style={submitBlock}> 
                      <SubButton> Submit </SubButton>
                    </div>
                  </form>             
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

