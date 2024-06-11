import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCustomer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/customers/${id}`);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer', error);
            }
        };

        fetchCustomer();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/customers/${id}`, customer);
            console.log('Customer updated', response.data);
        } catch (error) {
            console.error('Error updating customer', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Customer</h2>
            <input type="text" value={customer.name || ''} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} placeholder="Name" required />
            <input type="date" value={customer.dateOfBirth || ''} onChange={(e) => setCustomer({ ...customer, dateOfBirth: e.target.value })} placeholder="Date of Birth" required />
            <input type="text" value={customer.gender || ''} onChange={(e) => setCustomer({ ...customer, gender: e.target.value })} placeholder="Gender" required />
            <input type="number" value={customer.customerNumber || ''} onChange={(e) => setCustomer({ ...customer, customerNumber: e.target.value })} placeholder="Customer Number" required />
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default UpdateCustomer;
