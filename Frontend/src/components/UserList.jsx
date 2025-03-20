import React, { useEffect, useState } from 'react'
import axios from 'axios'


const  UserList= ()=> {
    const [user,setUser] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/user/users")
        .then((res)=>{setUser(res.data)})
        .catch((err)=>console.error("Error fetching users",err.message))
    },[]);

  return (
    <div>
    <div>UserList</div>
    <ul>
        {user.map((u)=>{
            return <li key = {u._id}> {u.userName}{u.email}{u.password}</li>
        })}
    </ul>
    </div>
  )
}

export default UserList