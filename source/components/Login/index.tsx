import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators }from 'redux';

import * as types from '../../Types';
import { FacebookLogin } from './Actions';
export class Login extends React.Component<types.IProps, {}> {

    render() {
        return (
            <View style={{padding: 20, flex: 1}}>
                <Text>Login</Text>
                <TextInput
                    style={{width: 200}}
                    placeholder='Username'
                    autoFocus
                    keyboardType='email-address' />
                <TextInput
                    style={{width: 200}}
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(name) => this.onTextChanged(name)} />
            </View>
        );
    }

    onTextChanged = (text: string) => {
        this.userName = text;
        if (text && text.length > 5) { Actions.pop(); }
    }

    userName: string = 'unknown';
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
  )(Login);