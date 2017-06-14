/*
 *
 * AdminDashboard
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import UsersTable from 'components/UsersTable';
import RaisedButton from 'material-ui/RaisedButton';

export default class AdminDashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };
  }
  componentWillMount()
  {
                
  }
  handleInvoice = () => {
    if (this.state.loggedIn === true) {
      return (
        <a href="http://localhost:8000/api/inv">
          <RaisedButton
            primary
            label="Invoice"
          />
        </a>
      );
    }
  }
  render() {
    return (
      <div>
        <Helmet title="AdminDashboard" meta={[{ name: 'description', content: 'Description of AdminDashboard' }]} />
        <UsersTable />
        <div>
          {this.handleInvoice()}
          <RaisedButton
            primary
            label="Check"
            onTouchTap={this.handleCheck}
          />

          <a href="http://localhost:8000/api/lout">
            <RaisedButton
              primary
              label="out"
            />
          </a>
        </div>
      </div>
    );
  }
}

