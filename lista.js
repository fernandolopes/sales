import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Linhas from './linhas';
import lista from './actions/actions';

class Lista extends React.Component {

  constructor(props){
    super(props);

    this.state = {payload: []};
  }
  componentDidMount(){
    
    const { dispatch } = this.props;
    dispatch({type: 'GET_USUARIO'});
  }
  render(){
      return(
          <Table>
              <TableHeader>
              <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
              </TableRow>
              </TableHeader>
              <Linhas data={this.state.payload} />
          </Table>
          )
      }
};

Lista = connect(lista)(Lista);
export default Lista;
