import React from 'react'
import { useState } from 'react'
import "./Verify.css"
import { supabase } from '../SupabaseClient'
import { Link, useLocation,useNavigate } from 'react-router-dom'


const Verify = () => {

  const navigate = useNavigate("")

  const location = useLocation()
const {condition} = location.state || {};


const signupForm = async (e)=>{
    e.preventDefault();
    console.log("okkk")
   let userData = new FormData(e.target)
   let userInfo = Object.fromEntries(userData)
   console.log(userInfo)
   e.target.reset()

// Empty Inputs :_
    if (Object.values(userInfo).some(fields => !fields.trim())) {
        alert("Please fill all fields!");
        return;
    }

    // Insert:-
   const { error } = await supabase
  .from('Users-data')
  .insert(
    {
        "name" : userInfo.yourname,
    }
  )
console.log(error);

// Auth:-
const { data, error:AuthError } = await supabase.auth.signUp({
  "email": userInfo.youremail,
  "password": userInfo.password,
})
console.log(data)
console.log(AuthError)

if(data){
     Swal.fire({
  title: "SignUp!",
  icon: "success",
  draggable: true
});
console.log(data.user.id);
navigate("/bookmarks");


}else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Try Again",
         });
}



}

const loginForm = async(e)=>{
    e.preventDefault();
    console.log("okkk")
   let userData = new FormData(e.target)
   let userInfo = Object.fromEntries(userData)
   console.log(userInfo)
   e.target.reset()

  if (Object.values(userInfo).some(fields => !fields.trim())){
    return;
   }


   const { data, error } = await supabase.auth.signInWithPassword({
  "email": userInfo.email,
  "password": userInfo.password,
})


if(data){
     Swal.fire({
  title: "SignUp!",
  icon: "success",
  draggable: true
});
}else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Try Again",
         });
}

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