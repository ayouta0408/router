import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/Home">
        <h3>Home</h3>
      </Link>
      <Link to="/users">
        <h3> List Users</h3>
      </Link>
    </div>
  );
}

export default NavBar;
