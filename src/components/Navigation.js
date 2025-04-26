import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Course Catalog</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enquiries">Enquiries</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;