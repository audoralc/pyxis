/*
 *
 * AdminDashboard
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


export default class AdminDashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token'),
      users: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/showUsers', {
      headers:{'Authorization': 'Bearer ' + this.state.token }
    }).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({ users: json });
      console.log(users);
    });
  }

  render() {
    return (
      <div>
        <Helmet title="AdminDashboard" meta={[ { name: 'description', content: 'Description of AdminDashboard' }]}/>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>id</TableHeaderColumn>
        <TableHeaderColumn>name</TableHeaderColumn>
        <TableHeaderColumn>email</TableHeaderColumn>
        <TableHeaderColumn>tier</TableHeaderColumn>
        <TableHeaderColumn>stripe_plan</TableHeaderColumn>
        <TableHeaderColumn>quantity</TableHeaderColumn>
        <TableHeaderColumn>roleId</TableHeaderColumn>
        <TableHeaderColumn>Country</TableHeaderColumn>
        <TableHeaderColumn>City</TableHeaderColumn>
        <TableHeaderColumn>ends_at</TableHeaderColumn>
        <TableHeaderColumn>created_at</TableHeaderColumn>
        <TableHeaderColumn>updated_at</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody>

{this.state.users.map((user, index) => (
      <TableRow>
        <TableHeaderColumn>{user.id}</TableHeaderColumn>
        <TableHeaderColumn>{user.name}</TableHeaderColumn>
        <TableHeaderColumn>{user.email}</TableHeaderColumn>
        <TableHeaderColumn>{user.tier}</TableHeaderColumn>
        <TableHeaderColumn>{user.stripe_plan}</TableHeaderColumn>
        <TableHeaderColumn>{user.quantity}</TableHeaderColumn>
        <TableHeaderColumn>{user.roleId}</TableHeaderColumn>
        <TableHeaderColumn>{user.billingCountry}</TableHeaderColumn>
        <TableHeaderColumn>{user.billingCity}</TableHeaderColumn>
        <TableHeaderColumn>{user.ends_at}</TableHeaderColumn>
        <TableHeaderColumn>{user.created_at}</TableHeaderColumn>
        <TableHeaderColumn>{user.updated_at}</TableHeaderColumn>
      </TableRow>
))}
    </TableBody>
  </Table>
      </div>
    );
  }
}
