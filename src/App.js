// App.js
import React, { useEffect, useState } from 'react';
import { IoPersonAddSharp } from "react-icons/io5";
import ContactList from './components/ContactList';
import axios from 'axios';
import { Link } from 'react-router-dom';


function App() {
 const [contactdb,setContactDb] = useState([]);

 useEffect(()=>{
    const getUsers = async()=>{
      try {
        const response = await axios.get("http://localhost:3031/users");
        setContactDb(response.data)
      } catch (error) {
        console.log("Error while getting Users");
      }
    }
    getUsers();
 },[])
  return (
    <div>
      {/* App Container Heading */}
      <div className='bg-slate-700 w-[50%] mx-auto mt-10 flex justify-between align-middle'>
          <h1 className="text-3xl font-bold text-slate-50 mx-4">Contacts List</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/add-detail'><IoPersonAddSharp /></Link></button>
      </div>
      {/* Contact-List  */}
      {contactdb.map((item)=>{
        return <ContactList key={item.id} contactDetail={item}/>
      })}
      
      
    </div>  
    
      
    
  );
}

export default App;
