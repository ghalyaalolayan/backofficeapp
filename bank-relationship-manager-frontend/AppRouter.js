import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import LoginForm from './components/LoginForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/customer-form" component={CustomerForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
