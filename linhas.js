import React from 'react';

class Linhas extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    var rows = this.props.data.map(function(user) {
      return (
        <TableRow>
            <TableRowColumn>user.id</TableRowColumn>
            <TableRowColumn>user.name</TableRowColumn>
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
