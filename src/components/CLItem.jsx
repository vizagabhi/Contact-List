import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './CLItem.css'

const CLItem = ({detail}) => {
    console.log(detail)
  return (
    <div className='item-card'>
        <h3 className="item-name">{detail.name}</h3>
        <h3 className='item-phone'>{detail.phone}</h3>
        <div className="item-btn">
            <Link to={`/update/${detail.id}`}><FaEdit style={{color: "green"}}/></Link>
            <Link to={`/delete/${detail.id}`}><MdDelete style={{color: "red"}} /></Link>
        </div>
    </div>
  )
}

export default CLItem
