import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate()
    const {id}=useParams()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""

    })
    const{name,username,email}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});//spread oprator since we have to add many users
    };
    useEffect(()=>{
    loadUser()},[]);

    const onSubmit= async (e)=>{
   e.preventDefault(); //if we dont use prevent default then whenever we post the data in the form the data would be displayed in the URL
   await axios.put(`http://localhost:8080/user/${id}`,user)
   navigate("/") //after submit the page shoukd navigate to the home page
    };

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-centre m-4">Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"}
                    className="form-control"
                    place-holder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">
                        UserName
                    </label>
                    <input type={"text"}
                    className="form-control"
                    place-holder="Enter username"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input type={"text"}
                    className="form-control"
                    place-holder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
               
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
