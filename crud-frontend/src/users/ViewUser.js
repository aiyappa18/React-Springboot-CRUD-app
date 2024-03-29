import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {id}=useParams();

    useEffect(()=>{
      loadUsers() //load the users  when this component is first loaded
    },[])
    const loadUsers=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`) 
        setUser(result.data)
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-centre m-4"> User Details</h2>
                <div className="card">
                    <div className='="card-header'>
                        Details of the user {user.name}
                        <ul className="list group list-group-flush">
                            <li className="list-group-item">
                                <b>Name:{user.name}</b>
                            </li>
                            <li className="list-group-item">
                                <b>UserName:{user.username}</b>
                            </li>
                            <li className="list-group-item">
                                <b>Email:{user.email}</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
    </div>
    </div>
    </div>

  )
}
