import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetail = () => {
  const [user,setUser] = useState([]);
  const params = useParams();
  useEffect(()=>{
    const fetchUser = async() => {
      try {
        const fetcheduser = await axios.get(`http://localhost:3031/users/${params.id}`);
        setUser(fetcheduser.data)
      } catch (error) {
        console.log("Error occured while fetching user!");
      }
    }
    fetchUser();
  },[])
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-slate-700">
      <h1 className="text-4xl font-bold text-purple-600">User Detail</h1>
      <div className="w-full px-6 py-4 mt-6 border border-slate-400 bg-slate-700 shadow-md sm:max-w-md sm:rounded-lg">
        <p className="font-bold text-purple-600">NAME: <span className="text-slate-50 tracking-widest">{user.name}</span></p>
        <p className="font-bold text-purple-600">MAIL: <span className="text-slate-50 tracking-widest">{user.email}</span></p>
        <p className="font-bold text-purple-600">AGE: <span className="text-slate-50 tracking-widest">{user.age}</span></p>
        <p className="font-bold text-purple-600 mb-4">PHONE: <span className="text-slate-50 tracking-widest">{user.phone}</span></p>
        <Link to="/">
          <button className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-blue-700">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetail;
