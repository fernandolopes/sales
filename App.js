import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {blue800, blue700, red500, greenA200, grey400} from 'material-ui/styles/colors';
import Corpo from './corpo';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';

const myTheme = getMuiTheme({
  palette: {
    primary1Color: blue800,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: red500,
  }
});

export default class App extends React.Component {
    constructor(props) {
     super(props);
     this.state = {open: false};
   }

   handleToggle(){
      this.setState({open: !this.state.open});
   }
   render() {
      return (
         <MuiThemeProvider muiTheme={myTheme}>
            <div>
                <AppBar title="Área administrativa"
                    iconElementLeft={
                        <IconButton onTouchTap={this.handleToggle.bind(this)}><MenuIcon color="#FFF" /></IconButton>
                    }
                />
                <Corpo />
                <Drawer
                  docked={false}
                  width={200}
                  onRequestChange={(open) => this.setState({open})}
                  open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        </MuiThemeProvider>
      );
   }
}
