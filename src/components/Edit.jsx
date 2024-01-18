import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import images7 from '../assets/images7.png'


function Edit() {
    const [show,setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)

    return (
      <>
      <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'><i style={{height:'34px'}} className='fa-solid fa-edit fa-2x '></i></button>

      
      <Modal size='lg'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4">
                <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                  <input type="file" style={{display:'none'}} />
                  <img height={'200px'} width={'200px'} className='mt-5' src={images7} alt="project upload pic " />
                </label>
              </div>
              <div className="col-lg-8">
                <div className='mb-3'>
                  <input className=' border rounded p-2 w-100' type="text" placeholder='Project Title' />
                </div>
                <div className='mb-3'>
                  <input className=' border rounded p-2 w-100' type="text" placeholder='Language Used' />
                </div>
                <div className='mb-3'>
                  <input className=' border rounded p-2 w-100' type="text" placeholder='Project Github link' />
                </div>
                <div className='mb-3'>
                  <input className=' border rounded p-2 w-100' type="text" placeholder='Project website link' />
                </div>
                <div className='mb-3'>
                  <input className=' border rounded p-2 w-100' type="text" placeholder='Project Overview' />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success">Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
 
}


export default Edit