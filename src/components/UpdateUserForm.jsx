import React, { useState } from 'react';
import axios from 'axios';

function UpdateUserForm({ contact, onUpdate }) {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
        name,
        email,
        phone
      });
      const updatedContact = response.data;
      onUpdate(updatedContact); // Call the onUpdate callback with the updated contact
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Update form inputs */}
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateUserForm;
