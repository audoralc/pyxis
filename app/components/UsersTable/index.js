/**
*
* UsersTable
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

class UsersTable extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
      users: [],
    };
  }
  componentWillMount() {
    fetch('http://localhost:8000/api/showUsers', {
      headers:{'Authorization': 'Bearer ' + this.state.token },
    }).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({ users: json });
    });
  }
  render() {
    const style = {
      display: 'flex',
      overflow: 'auto',
    };
    return (
      <div>

        <AppBar
          style={{ background: '#0c3a7f' }}
          title="Pyxis Dashborad"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          titleStyle={{ textAlign: 'center' }}
        />

        <div>
          <Table height="300px" fixedHeader>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>id</TableHeaderColumn>
                <TableHeaderColumn>name</TableHeaderColumn>
                <TableHeaderColumn>email</TableHeaderColumn>
                <TableHeaderColumn>tier</TableHeaderColumn>
                <TableHeaderColumn>stripe_plan</TableHeaderColumn>
                <TableHeaderColumn>quantity</TableHeaderColumn>
                <TableHeaderColumn>ends_at</TableHeaderColumn>
                <TableHeaderColumn>created_at</TableHeaderColumn>
                <TableHeaderColumn>updated_at</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody bodyStyle={style}>
              { this.state.users.map((user) => (
                <TableRow>
                  <TableHeaderColumn>{user.id}</TableHeaderColumn>
                  <TableHeaderColumn>{user.name}</TableHeaderColumn>
                  <TableHeaderColumn>{user.email}</TableHeaderColumn>
                  <TableHeaderColumn>{user.tier}</TableHeaderColumn>
                  <TableHeaderColumn>{user.stripe_plan}</TableHeaderColumn>
                  <TableHeaderColumn>{user.quantity}</TableHeaderColumn>
                  <TableHeaderColumn>{user.ends_at}</TableHeaderColumn>
                  <TableHeaderColumn>{user.created_at}</TableHeaderColumn>
                  <TableHeaderColumn>{user.updated_at}</TableHeaderColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
export default UsersTable;
