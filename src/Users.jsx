import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Users() {
    const[user, setUser] = useState([{
        id:"1",  Name: "krinsh",Email: "krinsh0906@gmail.com", Age: "22", 
        id2:"2",  Name2: "kristal",Email2: "kristal123@gmail.com", Age2: "20", 


    }])
     return (
    <div className='d-flex vh-100 bg-danger justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link className='btn btn-success' to={"/create"}>Add+</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-danger'>id</th>
                        <th className='text-danger'>Name</th>
                        <th className='text-danger'>Email</th>
                        <th className='text-danger'>Age</th>
                        <th className='text-danger'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user)=>{
                            return( <tr>
                                <td>{user.id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td><Link className='btn btn-success' to={"/Update"}>Update</Link><Link className='btn btn-danger'>delete</Link></td>


                            </tr>
                            )

                            
                            

                            
                        })
                    }
                </tbody>
                <tbody>
                    {
                        user.map((user)=>{
                            return( <tr>
                                <td>{user.id2}</td>
                                <td>{user.Name2}</td>
                                <td>{user.Email2}</td>
                                <td>{user.Age2}</td>
                                <td><Link className=' btn btn-success' to={"/Update"}>Update</Link><Link className='btn btn-danger'>delete</Link></td>


                            </tr>
                            )

                            
                            

                            
                        })
                    }
                </tbody>

            </table>

        </div>
      
    </div>
  );
}

export default Users;
