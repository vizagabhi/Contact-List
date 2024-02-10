import React, { useState } from 'react'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../utils/flashmsg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone:''
});

const handleSubmit = async(event) => {
  event.preventDefault();
  // Perform form submission logic here (e.g., send data to server)
  console.log('Form submitted with data:', formData);
  await axios.post('http://localhost:3031/users',formData);
  setFormData({
    name: '',
    email: '',
    age: '',
    phone:''
  })
  notify("User added in Contact List !");
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value
  });
};
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-slate-700">
                <div>
                    
                        <h3 className="text-4xl font-bold text-purple-600">
                            Add To Contact
                        </h3>
                    
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden  bg-slate-700 shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-100 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-100 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="age"
                                className="block text-sm font-medium text-slate-100 undefined"
                            >
                                Age
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-slate-100 undefined"
                            >
                                Phone
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="test"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                          <Link to="/">
                            <button
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-blue-700 false"
                            >
                            Back
                            </button>
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-purple-600 false"
                            >
                                ADD
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer/>
            </div>
  )
}

export default AddDetail
