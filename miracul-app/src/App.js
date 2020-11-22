import React, { PureComponent } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import ShopPage from "./containers/ShopPage/ShopPage";
import Login from "./containers/Auth/Login";
import SignUp from "./containers/Auth/SignUp";
import ProtectedRoute from "./hoc/protectedRoute";
import ControlPanel from "./containers/ControlPanel/ControlPanel";
import { connect } from "react-redux";
import { setAuth } from "./actions/auth";
import { ToastProvider } from 'react-toast-notifications'

class App extends PureComponent {
  componentDidMount() {
    this.props.setAuth();
  }

  render() {
    return (
      <div className="App">
        <ToastProvider>
        <Switch>
            <Route path="/wallshop" component={ShopPage} />
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <ProtectedRoute
              path="/dashboard"
              component={ControlPanel}
              authed={this.props.isRouterAuth}
            />
          </Switch>
        </ToastProvider>
     
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isRouterAuth: state.authState.isRouterAuth,
});

export default connect(mapStateToProps, { setAuth })(App);
