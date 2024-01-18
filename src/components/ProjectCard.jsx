import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow mb-5 btn' style={{ width: '28rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/11/1f/b1/111fb12682aa19efa8ebdab9ab968f6a.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row className='align-items-center'>
          <Col sm={12} md={6}>
            <img  className='img-fluid' src="https://i.pinimg.com/originals/11/1f/b1/111fb12682aa19efa8ebdab9ab968f6a.png" alt="Project image" />

          </Col>
          <Col sm={12} md={6}>
            <h2 className="fw-bolder text-warning">Title</h2>
            <p>Project Overview :<span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus, libero consequatur saepe incidunt maiores quasi delectus et praesentium. Natus nesciunt ullam, quis eum neque necessitatibus quia illum voluptatem eligendi?</span></p>
            <p>Language used : <span className="fw-bolder text-danger">HTML,CSS,JS</span> </p>

          </Col>

          </Row>
          <div className="mt-3">
            <a href="https://github.com/sreehari20017/weatherapp" target='_blank' style={{cursor:'pointer',color:'black'}}><i style={{height:'34px'}} className="fa-brands fa-github fa-2x"></i></a>

            <a href="https://weatherapp-silk-five.vercel.app/" target='_blank' style={{cursor:'pointer',color:'black'}} className='ms-5'><i style={{height:'34px'}} className="fa-solid fa-link fa-2x"></i></a>

          </div>
         

        </Modal.Body>
       </Modal>
    </>
  )
}

export default ProjectCard