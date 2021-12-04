
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Layout Pages
import Front from './Layout/front'
import User from './Layout/user'


// Front Pages
import Section from './Front/Section'
import Signin from './Front/Signin'
import Signup from './Front/Signup'
import Success from './Front/Success'
import Verification from './Front/Verification'
import Forgetpassword from './Front/Forgetpassword'
import Erreg from './Front/Erreg'

// Dashboard Pages
import Home from './Dashboard/home'

import { Recuive } from './Dashboard/TransactionList/RecuivedHistory';
import user from './Layout/user';
import { TransferAmount } from './Dashboard/TransactionList/TransferAmount';
import { TransferHistory } from './Dashboard/TransactionList/TransferHistory';
import { Setting } from './Dashboard/TransactionList/setting/Setting';
import { Api } from './Dashboard/TransactionList/setting/Api';
import { Alert } from './Dashboard/TransactionList/setting/Alert';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

function App() {
  return (
    <Router>
      <AppRoute exact path="/" layout={Front} component={Section} />
      <AppRoute exact path='/Forgetpassword' layout={Front} component={Forgetpassword} />
      <AppRoute exact path='/Erreg' layout={Front} component={Erreg} />
      <AppRoute exact path='/Success/:id' layout={Front} component={Success} />
      <AppRoute exact path='/Verification' layout={Front} component={Verification} />
      <AppRoute exact path='/Signup' layout={Front} component={Signup} />
      <AppRoute exact path='/Signin' layout={Front} component={Signin} />
      <AppRoute exact path='/home' layout={User} component={Home} />
      <AppRoute exact path="/recuive-history" layout={user} component={Recuive} />
      <AppRoute exact path="/transfer-amount" layout={user} component={TransferAmount} />
      <AppRoute exact path="/transfer-history" layout={user} component={TransferHistory} />
      <AppRoute exact path="/user-setting" layout={user} component={Setting} />
      <AppRoute exact path="/user-api" layout={user} component={Api} />
      <AppRoute exact path="/user-alert" layout={user} component={Alert} />
     
      
    </Router>
  );
}

export default App;
