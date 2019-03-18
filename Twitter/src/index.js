import React, { Component } from 'react';
import Root from './routes'
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore'

const store = configureStore()
export default class App extends React.Component {
    
    //Configure Redux , Redux middle ware here
    render() {       
            return (
                <Provider store = { store }>
                    <Root />  
                    </Provider>
            
        );
                    
    }
}

