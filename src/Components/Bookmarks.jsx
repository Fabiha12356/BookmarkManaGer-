import React from 'react'


import {  useNavigate } from 'react-router-dom'
import { supabase } from '../SupabaseClient'
import { useState,useEffect } from 'react'
import UIbookmark from './UIbookmark'
import { useLocation } from 'react-router-dom'


import "./Bookmarks.css"
const Bookmarks = () => {
  const navigate = useNavigate("")
  const location = useLocation("")
  const {condition} = location.state || {}
  let [show,showSet] = useState([])


 useEffect(()=>{

  const uiRender = async()=>{
    const{data : {user}} = await supabase.auth.getUser()
  const { data, error } = await supabase
  .from('Receipe')
   .select("*")
 .eq("users-id", user.id);
  console.log(data)
console.log(error);
showSet(data);

}
uiRender()
 },[])




  return (
     (condition === false) ? <>    <div className="saved-bookmarks">

      <div className="saved-heading">
        <div>
          <h2>My Bookmarks</h2>
          <p>All your saved websites in one place.</p>
        </div>

      
      </div>

      <div className="bookmark-grid">

        {show.map((item) => (

          <div className="saved-card" key={item.id}>

            <div className="saved-card-top">
              <span className="category-tag">
                {item.category}
              </span>

              <span className="bookmark-icon">✦</span>
            </div>

            <h3>{item.recipename}</h3>

            <p className="saved-description">
              {item.description}
            </p>

            <div className="saved-card-bottom">

              <a
                href={item.URL}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website ↗
              </a>

            </div>

          </div>

        ))}

      </div>

    </div></>:
    <><UIbookmark/></>
  )
}

export default Bookmarks