import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import images6 from '../assets/images6.jpg'

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='border rounded p-2'>
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button onClick={()=>setOpen(!open)} className='btn btn-outline-warning'><i className="fa-solid fa-caret-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
          <label >
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='img-fluid rounde-circle' src={images6} alt="upload profile pic" />
          </label>
          <form >
           <div className='mb-3'>
              <input type="text" className="rounded p-1 w-75" placeholder='Enter your Github Link here' />
            </div>
            <div className='mb-3'>
              <input type="text" className="rounded p-1 w-75" placeholder='Enter your Linkedin Link here' />
            </div>      
            <div className='mb-3 d-grid w-75 text-center mx-auto'>
              <button className='btn btn-warning'>Update</button>
            </div>

  </form>

        </div>
      </Collapse>
    </div>
  )
}

export default Profile