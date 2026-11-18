import React from 'react'
import { useState } from 'react'
import "./Verify.css"


const Verify = ({condition}) => {

const signupForm = (e)=>{
    e.preventDefault();
    console.log("okkk")
   let userData = new FormData(e.target)
   let userInfo = Object.fromEntries(userData)
   console.log(userInfo)
   e.target.reset()
}
const loginForm = (e)=>{
    e.preventDefault();
    console.log("okkk")
   let userData = new FormData(e.target)
   let userInfo = Object.fromEntries(userData)
   console.log(userInfo)
   e.target.reset()
}




  return (
 (condition) ? <>  <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">✦ BookNest</div>

        <h2>Create Account</h2>
        <p className="auth-subtitle">
          Start organizing your favorite links!
        </p>

        <form onSubmit={signupForm}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name"  name='yourname'/>

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" name='youremail' />

          <label>Password</label>
          <input type="password" placeholder="Create password"  name='password'/>

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

        <form onSubmit={loginForm}>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email"  name='youremail' />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" name='password' />

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