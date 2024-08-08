import React from 'react'
import logo from '../components/assets/logo.png'

const Navbar = () => {
  return (
    <div>
      
    <nav className="back-1">
    <div className="navbar">
    <div className="navbar-left">
    <img src={logo} alt="" className='tw-w-40'/>
    <ul className="tw-flex -tw-mt-5">
        <li><a href="#" className='tw-text-white'>Domains</a></li>
        <li><a href="#" className='tw-text-white'>Websites and Hosting</a></li>
        <li><a href="#" className='tw-text-white'>Email</a></li>
        <li><a href="#" className='tw-text-white'>Security</a></li>
        <li><a href="#" className='tw-text-white'>Marketing</a></li>
        <li><a href="#" className='tw-text-white'>Pricing</a></li>
        </ul>
    </div>
    <ul className="nav-links">
            <li><a href="#" >Contact Us</a></li>
            <li><a href="#" >Help</a></li>
            <li className="nav-item dropdown ">
          <button className="tw-text-white btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li><svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18"  fill="white" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></li>
        </ul>
</div>

        {/* <ul className="nav-links">
            <li><a href="#" >Contact Us</a></li>
            <li><a href="#" >Help</a></li>
            <li className="nav-item dropdown ">
          <button className="tw-text-white btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li><svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18"  fill="white" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></li>
        </ul> */}
       
       
    </nav>
    <script src="scripts.js"></script>
    
   
  </div>
  

  )
}

export default Navbar
