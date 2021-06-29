import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Contacts</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home
                {/* <span className="visually-hidden">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-contact">Add Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;