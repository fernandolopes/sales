import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Linhas from './linhas';
// import lista from './actions/actions';

function getUsers(state){
  return {type: 'GET_USUARIO', payload: state.payload};
};

// function retorno(state){

//   return {type:'USUARIO_SUCESSO',payload: state.payload};
// };

class Lista extends React.Component {

  constructor(props){
    super(props);

    this.state = {payload: []};
  }
  componentDidMount(){
    const { dispatch } = this.props;
    console.log(dispatch);
    dispatch({type: 'GET_USUARIO'});
  }
  render(){
      const {lista} = this.props;
      console.log(this.state);
      return(
          <Table>
              <TableHeader>
              <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
              </TableRow>
              </TableHeader>
              <Linhas data={lista} />
          </Table>
          )
      }
};

Lista = connect(getUsers)(Lista);
export default Lista;
