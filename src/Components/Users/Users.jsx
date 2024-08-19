import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  //2.3read
  const loadeddata = useLoaderData();
  const [users, setUsers] = useState(loadeddata);

//3.2 deleted
  const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                console.log('Successfully deleted',data);
                //remove the user from 
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers);
            }
          
        })
  }

  return (
    <div>
      <h1>users : {loadeddata.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th> Last LogIn</th>
              <th>Action</th>
           
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>{user.lastLoginAt}</td>
                <td><button onClick={() => handleDelete(user._id)} className="btn">X</button></td>
              </tr>
            ))}
            {/* row 2 */}
          
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
