import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/customers">Customer List</Link></li>
          <li><Link to="/customer-form">Add Customer</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      {/* Add more content here */}
    </div>
  );
};

export default Homepage;
