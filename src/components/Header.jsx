import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashBoard}) {
  return (
    <Navbar style={{width:"100%",position:'fixed',top:'0px',zIndex:5}} className="bg-success">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>
        <i style={{height:'25px'}} class='fa-solid fa-hands-holding-circle'></i>{' '}Project Fair

        </Link>
      </Navbar.Brand>
      {
      insideDashBoard&&
      <div className='ms-auto'>
        <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i class="fa-solid fa-gear me-2"></i>Logout</button>
        
      </div>
     
      }
      
      <button></button>
    </Container>
  </Navbar>
  )
}

export default Header