import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPersonAdd} from "react-icons/bs";
import CLItem from './CLItem';
import './ContactList.css'
import { Link } from 'react-router-dom';

function ContactList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3031/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className='contact_container'>
      <div className="contact_header">
        <h1 style={{color: "orange"}}>Contact List</h1>
        <Link to="/add"><BsPersonAdd /></Link>
      </div>
      
      <ul>
        {users.map(userx => (
          <CLItem key={userx.id} detail={userx}/>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
