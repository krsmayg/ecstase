import React from 'react';
import { Component } from 'react';
import {Router,Switch, Route} from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import HomePage from './containers/HomePage/HomePage'


class App extends Component{
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            {/* <Route path='/wallshop'  /> */}
            <Route path='/' component={HomePage} exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
