import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Linhas from './linhas';
import lista from './actions/actions';

class Lista extends React.Component {

  constructor(props){
    super(props);
    console.log(`constructor`);
    console.log(props);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type: 'GET_USUARIO'});
  }

  render(){
    console.log(`vai renderizar`);
    console.log(this.props.payload);

    return(
      <Table>
          <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <Linhas data={this.props.payload}/>
      </Table>
    );
  }

};

Lista.defaultProps = { payload : [] };
Lista = connect(
  (state, props) => {
    return {payload : state.listas.payload};
  }
)(Lista);
export default Lista;
