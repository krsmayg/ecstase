import React,{ Component } from 'react';
import {Router,Switch, Route} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import ShopPage from './containers/ShopPage/ShopPage';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/wallshop' component={ShopPage}  />
            <Route path='/' component={HomePage} exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
