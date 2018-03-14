import React, { Component } from 'react';
import { View, Button, Text, TextInput, Alert } from 'react-native';
import Progress from '../Progress';
import { Actions } from 'react-native-router-flux';
import * as types from '../../Types';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators }from 'redux';
import { FacebookLogin } from '../Login/Actions';

interface IState {
    isLoaded: boolean;
    userName: string;
    amountClicks: number;
}

export class App extends Component <types.IProps, IState> {
// PROPS, FUNC:

constructor(props: any) {
  super(props);
  this.state = {
    isLoaded: false,
    userName: '',
    amountClicks: 0,
};
}

onTextChanged(newName: string) {
  this.setState({
    userName: newName,
    amountClicks: this.state.amountClicks + 1,
  });
}

componentDidMount() {
  if (!this.props.login.isLoggedIn) {
    Actions.push('Login');
  }
}

  render() {
    return (
      <View>
        <TextInput
        style={{padding: 40, borderColor: 'gray', borderWidth: 1, fontSize: 14}}
        placeholder='Type here pleass'
        onChangeText ={(text) => this.onTextChanged(text)}
        />
        <Text
        style={{fontSize: 14, padding: 30}}>
        {'Welcome' + ' ' + this.state.userName}</Text>
        <Button
          onPress={() => {
            Alert.alert('Error');
          }}
          title='Next'
          />

          <Progress amount={this.state.amountClicks} />

      </View>
    );
  }
}

const mapStateToProps = (state: types.IApplicationState) => ({
  // route: state.route,
  login: state.login,
});

const mapDispatchToProps = (dispatch: Dispatch<types.IProps>) => ({
  dispatch, FacebookLogin: bindActionCreators(FacebookLogin, dispatch),
});

export default connect<types.IApplicationState, types.IProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);