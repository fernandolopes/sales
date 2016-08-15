import React from 'react';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TableExampleSimple from './lista';
import FormularioConnect from './formulario';
import Lista from './lista';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
//import addUser from './actions/actions';

const stylePaper = {
  minHeight: 300,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
  padding: '37px 20px 20px 30px',
};
const stylePanel = {
  padding: '0px 20px 20px 20px',
}
const styleButton = {
  //marginRight: 20,
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

function newUser(state){
  return {type: state.type, payload: state.abrir};
}

class Corpo extends React.Component{

    handleOpen () {
      this.props.dispatch({ type: 'NEW_USER', payload: true });
    }
    render() {
        return(
            <div style={stylePanel}>
                <Paper style={stylePaper} zDepth={3} rounded={true} >
                    <Lista />
                </Paper>
                <FloatingActionButton
                    style={styleButton}
                    onTouchTap={this.handleOpen.bind(this)}
                    >
                  <ContentAdd />
                </FloatingActionButton>
                <FormularioConnect {...this.props}/>
            </div>
        )
    }
}

export default open = connect(newUser)(Corpo);
