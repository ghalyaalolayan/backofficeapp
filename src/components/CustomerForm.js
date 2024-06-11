import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        customerNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/customers/add', formData);
            console.log('Customer added:', response.data);
            // Clear form fields after successful submission
            setFormData({
                name: '',
                dateOfBirth: '',
                gender: '',
                customerNumber: ''
            });
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <div>
            <h2>Add Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <br />
                <label>
                    Customer Number:
                    <input type="text" name="customerNumber" value={formData.customerNumber} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CustomerForm;
