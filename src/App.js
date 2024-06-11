// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import UpdateCustomer from './components/UpdateCustomer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/update-customer/:id" element={<UpdateCustomer />} />
          <Route path="/add-customer" element={<CustomerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <ul>
        <li><a href="/add-customer">Add Customer</a></li>
        <li><a href="/customers">Customer List</a></li>
        <li><a href="/update-customer/123">Update Customer Details</a></li>
      </ul>
    </div>
  );
}

export default App;
