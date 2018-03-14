// Login/Components/index
// login/index
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators }from 'redux';
import { SocialIcon } from 'react-native-elements';

import * as types from '../../../Types';
import { FacebookLogin } from '../Actions';

export class Login extends React.Component<types.IProps, {}> {

    render() {
        return (
            <View style={{padding: 50, flex: 1, backgroundColor: 'white'}}>
                <Text>Login</Text>
                <SocialIcon
                    title='Sign in with Facebook'
                    button
                    onPress={this.facebookLogin}
                    type='facebook'
                />
            </View>
        );
    }

/**
 * Wraps {@link FacebookActions.FacebookLogin}
 * @type {function}
 * @private
 */

  facebookLogin = async () => {
    await this.props.FacebookLogin();
    if (this.props.login.isLoggedIn) {
      Actions.pop();
    }
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