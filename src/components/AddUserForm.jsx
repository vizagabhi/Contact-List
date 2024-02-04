import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3031/users', formData);
      const newUser = response.data;
      console.log(newUser);
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
