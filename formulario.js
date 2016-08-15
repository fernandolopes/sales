import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import acao from './actions/actions';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

// let DateTimeFormat;

// if (areIntlLocalesSupported(['pt-BR'])) {
//   DateTimeFormat = global.Intl.DateTimeFormat; Intl.DateTimeFormat("pt-BR")
// } else {
  const IntlPolyfill = require('intl');
  let DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/pt-BR');
//}

const style = {
  margin: 12,
};

const styleButtonCancelar = {
  marginRight: 15,
};

const selectStyle = {
    textAlign: 'left',
};

// const validate = values =>{
//     const errors = {}
//     const requiredFields = ['nome','email']
//     if(value.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = 'E-mail inválido'
//     }
// }

export class Formulario extends Component {

    constructor(props){
        super(props);

        this.state = {
          sexo: 1,
          nome: '',
          email: '',
          data: null,
        }
    }

    handleClose(){
      const { dispatch, actions } = this.props;
      const payload = false;
      dispatch({type:'NEW_USER', payload});
    }
    handleChangeGenero(event, index, value) {
        this.setState({
            sexo: value
        })
    }
    handleChangeNome(event, value){
        this.setState({
            nome: value
        })
    }
    handleChangeEmail(event, value){
        this.setState({
            email: value
        })
    }
    handleChangeData(event, value){
        this.setState({
            data: value
        })
    }

    enviar() {
      const { dispatch, action } = this.props;
      const payload = this.state;
      dispatch({type: 'ENVIANDO_USUARIO',payload});
      this.handleClose();
    }

    render(){
      const actions = [
        <RaisedButton
          label="Cancelar"
          style={styleButtonCancelar}
          onTouchTap={this.handleClose.bind(this)}
        />,
        <RaisedButton
          label="Salvar"
          secondary={true}
          keyboardFocused={true}
          onTouchTap={this.enviar.bind(this)}
        />,
      ];
        return(
          <Dialog
                title="Cadastrar Usuário"
                actions={actions}
                modal={true}
                open={this.props.payload}
              >
                <TextField
                    id="text-field-controlled"
                    hintText="Nome completo"
                    floatingLabelText="Nome completo"
                    required={true}
                    onChange={this.handleChangeNome.bind(this)}
                    />
                <DatePicker
                    hintText="Data de nascimento"
                    floatingLabelText="Data de nascimento"
                    id="text-field-controlled"
                    DateTimeFormat={DateTimeFormat}
                    autoOk={true}
                    cancelLabel="Cancelar"
                    formatDate={new DateTimeFormat('pt-BR', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                    }).format}
                    onChange={this.handleChangeData.bind(this)}
                    />
                 <SelectField
                    floatingLabelText="Gênero"
                    onChange={this.handleChangeGenero.bind(this)}
                    style={selectStyle}
                    >
                    <MenuItem value={1} primaryText="Masculino" />
                    <MenuItem value={2} primaryText="Feminino" />
                 </SelectField>
                 <br />
                 <TextField
                    id="text-field-controlled"
                    hintText="Email"
                    onChange={this.handleChangeEmail.bind(this)}
                    floatingLabelText="Email"
                    />
                <br />

            </Dialog>
        );
    }
};

const FormularioConnect = connect(acao)(Formulario);

export default FormularioConnect;
