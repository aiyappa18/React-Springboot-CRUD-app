import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""

    })
    const{name,username,email}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});//spread oprator since we have to add many users
    };

    const onSubmit= async (e)=>{
   e.preventDefault(); //if we dont use prevent default then whenever we post the data in the form the data would be displayed in the URL
   await axios.post("http://localhost:8080/user",user)
   navigate("/") //after submitting the page should navigate to the home page
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-centre m-4">Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                {/* on submission we want to handle the data that was entered in the form and send it to the server for saving  */}
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
                {/* when we submit the form we need to send the data to the backend to send it to the server */}
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
