import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav>
      <div className="brand">VolunteerVibe</div>
      <div className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">SignUp</Link>
      </div>
    </nav>
  );
}

export default Navbar;
