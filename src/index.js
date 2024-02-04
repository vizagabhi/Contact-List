import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactList from './components/ContactList';
import AddUserForm from './components/AddUserForm';
// import UpdateUserForm from './UpdateUserForm';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ContactList />} >
        <Route path="add" element={<AddUserForm />} />
    </Route>
      
  )
)  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

