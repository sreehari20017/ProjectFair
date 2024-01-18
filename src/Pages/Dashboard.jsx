import React from 'react'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
    <Header insideDashBoard/>
    <div style={{marginTop:'100px'}} className='container'>
      <h1> Welcome <span className='text-warning'>User</span> </h1>
      <div className="row mt-5">
        <div className="col-lg-8">
          <MyProjects></MyProjects>
        </div>
        <div className="col-lg-4">
          <Profile></Profile>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard