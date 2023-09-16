import React from 'react';
import { Link } from 'react-router-dom';

function Createuser() {
  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form>
          <h2 className=''>Create user</h2>
          <div className='mb-2'>
            <label>Name:-</label>
            <input type='text' placeholder='name' className='form-control'/>
          </div>

          <div className='mb-2'>
            <label>Email:-</label>
            <input type='email' placeholder='Email' className='form-control'/>
          </div>

          <div className='mb-2'>
            <label>Age:-</label>
            <input type='number' placeholder='Age' className='form-control'/>
          </div>
          <Link className='btn btn-success'>Add</Link>
        </form>

      </div>
    </div>
  );
}

export default Createuser;
