import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users,setUser] = useState([])

function getUserData(){
    axios.get("https://67d15eb7825945773eb411e2.mockapi.io/api/v1/users")
    .then(res =>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch(err =>console.log(err))
}

useEffect(() =>{
    getUserData();
},[])

  return (
    <>
      <h1>User List</h1>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            users && users.map((users,ind)=>{
                return (
                    <tr key={users.id}>
                    <td>{++ind}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.contact}</td>
                    <td>
                        <button>Edit</button>
                        <button style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
                    </td>
                </tr>
                )
            })
           }
        </tbody>
      </table>
    </>
  )
}

export default Users
