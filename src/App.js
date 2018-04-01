import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Layout from './components/Layout'

const App = () => {
    return (
        <MuiThemeProvider>
            <div className="App">
                <Layout>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                </Layout>
            </div>
        </MuiThemeProvider >
    )
}

export default App;
