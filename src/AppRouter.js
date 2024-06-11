import Homepage from './components/Homepage';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import LoginForm from './components/LoginForm';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Define routes here */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
<Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/customers" component={CustomerList} />
  <Route path="/customer-form" component={CustomerForm} />
  <Route path="/login" component={LoginForm} />
</Switch>

