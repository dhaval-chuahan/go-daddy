import React from 'react'
import logo from '../components/assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg background " data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" className='tw-h-12' /> <span className='tw-text-white tw-absolute tw-text-sm -tw-mt-2 tw-block tw-pl-36 tw-font-bold'>India</span></a>
    <button className="navbar-toggler -tw-ml-10" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tw-font-bold tw-text-1xl tw-text-black" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item dropdown">  
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Domains 
          </a>
          <ul className="dropdown-menu dw-content">
              <div className='tw-h-96 tw-w-screen tw-container tw-flex'>
              <ul className='tw-ml-20'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-pt-20'><span><span className=''><i class="fa-solid fa-magnifying-glass"></i></span>Serch for Domain Names</span></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>AUCTION</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>DOMAIN</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>IMAGE</li>
                  <li></li>
              </ul>
              </div>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Websites and Hosting
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#">Email</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Security
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marketing
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    <div className=' collapse navbar-collapse tw-text-white'>
    <ul className="nav justify-content-end">
    <li className="nav-item">
          <a className="nav-link tw-ml-8 hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white under-t a1" aria-current="page" href="#">Contact Us</a>
    </li>
  <li className="nav-item">
    <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white under-t b2" href="#">Help</a>
  </li>
    <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded tw-text-white hover:tw-text-white under-t c3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
    </li>
    <li className="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18"  fill="white" className="bi bi-cart tw-mt-2 under-t d4" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
    </li>
</ul>
    </div>
  </div>
</nav>
  

  )
}

export default Navbar
