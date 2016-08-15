import React from 'react';
import {TableBody, TableRow, TableRowColumn} from 'material-ui/Table';


class Linhas extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const rows = this.props.data.map(function(user,i) {
      return (
        <TableRow key={i}>
            <TableRowColumn>{user.id}</TableRowColumn>
            <TableRowColumn>{user.name}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <TableBody>
        {rows}
      </TableBody>
    );
  }
};

export default Linhas;
