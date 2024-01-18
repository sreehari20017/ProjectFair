import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    
    <div>
        <hr />
<footer className="text-center text-lg-start bg-success text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span style={{color:'white'}}>Get connected with us on social networks:</span>
    </div>

    <div style={{color:'white'}}>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5" style={{color:'white'}}>
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          <i class='fa-solid fa-hands-holding-circle'></i>{' '}Project Fair
          </h6>
          <p>
          Designed and built with all the love in the world by the bootstrap team Possimus recusandae consequatur ipsa veritatis expedita aspernatur.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Guides
          </h6>
          <p>
            React
          </p>
          <p>
            Bootstrap
          </p>
          <p>
            Routing
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
             links
          </h6>
          <p>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className="text-reset">Home</Link>
          </p>
          <p>
          <Link to={'/Projects'} style={{textDecoration:'none',color:'white'}} className="text-reset">Projects</Link>
          </p>
          <p>
          <Link to={'/Dashboard'} style={{textDecoration:'none',color:'white'}} className="text-reset">Dashboard</Link>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <input type="email" placeholder='Enter email' className='form-control' />
          <button type="button" className="btn btn-warning mt-4">Send</button>
          
          
        </div>
        
      </div>
    </div>
  </section>

  <div className="text-center p-4 bg-success" style={{color:'white'}} >
   <p>
      © 2024 Copyright :
      <a className="text-reset fw-bold ms-2" style={{textDecoration:"none" }} href="">Project Fair.com</a>
   </p>
  </div>
</footer>

    </div>
  )
}

export default Footer