import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Modal, Tabs } from 'react-native-router-flux';
import {
    FontAwesome
    // @ts-ignore
} from '@expo/vector-icons';
import Main from '../Main';
import Login from '../Login';

const mainIcon = () => (
    <FontAwesome name='map-o' size={12} style={{color: 'white'}} />
);

const prefix = Platform.OS === 'android' ? 'myApp://myapp/' : 'myapp://';
const AppNavigator = () => {
    return (
        <Router
        // @ts-ignore
        uriPrefix={prefix}>
            <Scene key='root' hideNavBar panHandlers={null}>
                <Modal key='modal'>
                    <Tabs
                        activeBackgroundColor='blue'
                        inactiveBackgroundColor='black'
                        inactiveTintColor='grey'
                        activeTintColor='yellow'
                        tabBarPosition='bottom'
                        lazy
                        key='tabMain'>
                        <Scene
                            key='main'
                            icon={mainIcon}
                            tabBarLabel='Start'
                            back={false}
                            hideNavBar
                            tintColor='white'
                            component={Main}
                        />
                        <Scene
                            key='main2'
                            icon={mainIcon}
                            hideNavBar
                            tintColor='white'
                            tabBarLabel='Login'
                            back={false}
                            component={Login}
                        />
                    </Tabs>
                    <Scene key='Login'
                    component={Login} hideNavBar
                        back={false} />
                </Modal>
            </Scene>
        </Router>
    );
};

export default AppNavigator;