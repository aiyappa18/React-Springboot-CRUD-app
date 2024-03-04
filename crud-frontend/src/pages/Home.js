import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[users,setUsers]=useState([]);
    const {id}=useParams()

    useEffect(()=>{
      loadUsers();
    },[]); //if we don't add empty array it will keep loading innfinite times so we add an empty array

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");////we use async and await since javascript executes line by line we say it to wait until the function completes
        setUsers(result.data); //we use the setUsers function from the useState
    }; 
    const deleteUsers=async(id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };
       
  return (
    <div className="container">
    <div className="py-4">
    <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user,index) => (
    <tr>
      <th scope="row" key="index">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
      <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
      View
      </Link>
        <Link className="btn btn-outine-primary mx-2" to={`/edituser/${user.id}`}>
        Edit</Link>
        <Link className="btn btn-danger mx-2"
        onClick={() => deleteUsers(user.id)}>Delete</Link>
      </td>
    </tr>
  ))}
    
  </tbody>
</table>
    </div>
    </div>
  )
}
