import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users,setUsers]=useState(loadedUsers);

    const handleDeleteUser = (userId) => {
        console.log(userId);

        fetch(`http://localhost:5000/users/${userId}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            alert('Delete successfully')
             const remaining=users.filter(user=>user._id !==userId);
             setUsers(remaining);
          }
        })
    }

    return (
        <div>
            users :{users.length}

            <div>
                {
                    users.map(user => <p key={user._id}>

                        {user.name}  : {user.email}
                        <Link to={`/update/${user._id}`}>
                        <button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;