import React, { Component } from 'react';
import { View, Button, Text, TextInput, Alert } from 'react-native';
import Progress from '../Progress';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FacebookLogin } from '../Login/Actions';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            userName: '',
            amountClicks: 0,
        };
    }
    onTextChanged(newName) {
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
        return (<View>
        <TextInput style={{ padding: 40, borderColor: 'gray', borderWidth: 1, fontSize: 14 }} placeholder='Type here pleass' onChangeText={(text) => this.onTextChanged(text)}/>
        <Text style={{ fontSize: 14, padding: 30 }}>
        {'Welcome' + ' ' + this.state.userName}</Text>
        <Button onPress={() => {
            Alert.alert('Error');
        }} title='Next'/>

          <Progress amount={this.state.amountClicks}/>

      </View>);
    }
}
const mapStateToProps = (state) => ({
    login: state.login,
});
const mapDispatchToProps = (dispatch) => ({
    dispatch, FacebookLogin: bindActionCreators(FacebookLogin, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
