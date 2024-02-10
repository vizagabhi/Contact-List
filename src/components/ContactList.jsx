import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { Link } from 'react-router-dom';

const ContactList = ({contactDetail}) => {
    console.log(contactDetail);
  return (
    <div className='bg-slate-600 flex w-[50%] mx-auto justify-center align-middle my-2 border-slate-500 border-[1px] rounded'>
      <h2 className='flex-grow flex-start text-slate-300 text-center text-base'>{contactDetail.name}</h2>
      <h2 className='flex-grow text-slate-300 text-center text-base'>{contactDetail.phone}</h2>
      <div className='flex justify-end align-middle flex-grow'>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white mx-2 font-bold py-2 px-4 rounded"><Link to={`/view/${contactDetail.id}`}><CiViewList /></Link></button>
        <button className="bg-green-500 hover:bg-green-700 text-white mx-2 font-bold py-2 px-4 rounded"><Link to={`/update-detail/${contactDetail.id}`}><FaUserEdit /></Link></button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded"><MdDelete /></button>
      </div>
    </div>
  )
}

export default ContactList
