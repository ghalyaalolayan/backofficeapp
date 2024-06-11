import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customerNumber}>
                        {customer.name} - {customer.gender} - {new Date(customer.dateOfBirth).toLocaleDateString()}
                        <Link to={`/update-customer/${customer.customerNumber}`}>Update</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
