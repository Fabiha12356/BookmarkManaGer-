import React from 'react'

import "./Navbaar.css"

const Navbaar = () => {
    return (
    <nav className="navbar">
      <div className="logo">
        <span>✦</span> BookNest
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/bookmarks">Bookmarks</a></li>
        <li><a href="/favorites">Favorites</a></li>
      </ul>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbaar