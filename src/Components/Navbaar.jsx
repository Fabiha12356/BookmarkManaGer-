import React from 'react'
import { Link,Route,Routes,useNavigate } from 'react-router-dom';
import "./Navbaar.css"

import Bookmarks from './Bookmarks';
import Favorite from './Favorite';
import Hero from './Hero';
import Verify from './Verify';
import CreateBookmark from './CreateBookmark';


const Navbaar = () => {
  const navigate = useNavigate("")


  const login = ()=>{
    navigate("/verify", {
      state : {condition : false}
    })
  }

  const Signup = ()=>{
    navigate("/verify", {
      state : {condition : true}
    })
  }
    return (
   <>
    <nav className="navbar">
      <div className="logo">
        <span>✦</span> BookNest
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>

      <div className="auth-buttons ">
        <button  onClick={login} className="login-btn">Login</button >
        <button  onClick={Signup} className="signup-btn">Sign Up</button >
      </div>
    </nav>

<Routes>
    <Route path='/' element={<Hero  />} />
    <Route path='/bookmarks' element={<Bookmarks/>} />
    <Route path='/favorites' element={<Favorite/>} />
    <Route path='/Verify' element={<Verify/>} />
    <Route path='/createBookmark' element={<CreateBookmark/>} />


    {/* <Route path='/started' element={<Verify condition={true}/>} />
    <Route path='/login' element={<Verify condition={false}/>} />
    <Route path='/signup' element={<Verify condition={true}/>} />
    <Route path='/explore' element={<Bookmarks/>} /> */}
</Routes>
   </>


  );
}

export default Navbaar