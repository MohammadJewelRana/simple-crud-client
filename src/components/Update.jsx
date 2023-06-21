import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadUser=useLoaderData();
    console.log(loadUser);

  const handleUpdate=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    console.log(name, email);
    const updatedUser={name,email};

    fetch(`http://localhost:5000/users/${loadUser._id}`,{
      method: 'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);

      if(data.modifiedCount>0){
        alert('SUccessfully modified')
      }
    
        form.reset();
   
    })
  }


    return (
        <div>
            <h3>Update {loadUser.name}</h3>

            <form onSubmit={handleUpdate} action="">
                <input type="text " name='name' defaultValue={loadUser?.name} /><br /><br />
                <input type="email" name='email' defaultValue={loadUser?.email} /> <br /><br />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default Update;