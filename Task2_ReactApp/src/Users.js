import React from 'react'
import './Users.css';

const Users = ({img,fname,lname,email,id}) => {
  return(
    <div className='user' id='main'>
      <div className='imgBoX'>
        <img className='avatar' src={img} alt=''></img>
      </div>
      <h2>{fname} {lname}</h2>
      <a href='#'><p>{email}</p></a>
      <p className='id'>User ID: {id}</p>
    </div>
  )
}

export default Users;