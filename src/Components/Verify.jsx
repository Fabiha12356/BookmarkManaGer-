import React from 'react'
import "./Verify.css"
const Verify = ({condition}) => {
  return (
 (condition) ? <>  <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">✦ BookNest</div>

        <h2>Create Account</h2>
        <p className="auth-subtitle">
          Start organizing your favorite links!
        </p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Create password" />

          <button type="submit" className="auth-submit">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>
    </div></> : <>
     <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">✦ BookNest</div>

        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">
          Login to access your saved bookmarks.
        </p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="auth-submit">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

      </div>
    </div>
    </>
  )
}

export default Verify