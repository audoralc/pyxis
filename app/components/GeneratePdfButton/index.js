/**
*
* GeneratePdfbutton
*
*/
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class GeneratePdfbutton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };
  }
  handleInvoice = () => {
    const url = `http://localhost:8000/api/inv/?token=${this.state.token}`;
    const urlShow = `http://localhost:8000/api/index/?token=${this.state.token}`;
    if (this.state.role === 'user') {
      return (
        <div>
          <a href={url}>
            <RaisedButton
              primary
              label="Invoice"
            />
          </a>
          <a href={urlShow}>
            <RaisedButton
              primary
              label="Invoice"
            />
          </a>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.handleInvoice()}
      </div>
    );
  }
}
export default GeneratePdfbutton;
