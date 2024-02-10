import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactList = ({contactDetail}) => {
    const handleDelete = async(id) => {
            await axios.delete(`http://localhost:3031/users/${id}`);

    }
return (
    <div className='bg-slate-600 flex w-[50%] mx-auto justify-center align-middle my-2 border-slate-500 border-[1px] rounded'>
        <h2 className='flex-grow flex-start text-slate-300 text-center text-base'>{contactDetail.name}</h2>
        <h2 className='flex-grow text-slate-300 text-center text-base'>{contactDetail.phone}</h2>
        <div className='flex justify-end align-middle flex-grow'>
            <Link to={`/view/${contactDetail.id}`}><button className="bg-indigo-500 hover:bg-indigo-700 text-white mx-2 font-bold py-2 px-4 rounded"><CiViewList /></button></Link>
            <Link to={`/update-detail/${contactDetail.id}`}><button className="bg-green-500 hover:bg-green-700 text-white mx-2 font-bold py-2 px-4 rounded"><FaUserEdit /></button></Link>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded" onClick={()=>{handleDelete(contactDetail.id)}}><MdDelete /></button>
        </div>
    </div>
)
}

export default ContactList
