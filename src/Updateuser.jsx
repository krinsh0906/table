import React from 'react';

function Updatuser() {
  return (
    
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form>
          <h2>Update user</h2>
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
          <button type='submit' className='btn btn-success'>Update</button>


        </form>
      </div>
    </div>
  );
}

export default Updatuser;
