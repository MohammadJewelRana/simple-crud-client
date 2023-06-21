
import './App.css'

function App() {
  
  const handleAddUser = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    console.log(user);
    console.log(name, email);

    //pass user data to backend server side
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert ('Users added successfully')
        form.reset();
      }
    })
  }

  return (
    <div className="App">

      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser} action="">
        <input type="text" name='name' /><br /><br />
        <input type="email" name='email' /><br /><br />
        <input type="submit" value='Add user' /><br /><br />
      </form>

    </div>
  )
}

export default App
