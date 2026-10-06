import React from 'react'

const Navbar = () => {
  return (
    <ul className="navbar-nav flex-row justify-content-center gap-3">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">New Arrivals</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">Collections</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">Contact</a>
      </li>
    </ul>
  )
}

export default Navbar
