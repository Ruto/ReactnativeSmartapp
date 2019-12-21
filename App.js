import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store'; //Import the store
//import Home from './src/components/home' //Import the component file
//import AppNavigator from './src/router' // routing for react navigator
import AppContainer from './src/navigation'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}