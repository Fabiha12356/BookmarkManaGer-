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

const editBTn =async (card)=>{

 console.log(card.id);
console.log("okk")
 const { value: formValues } = await Swal.fire({
  title: "Multiple inputs",
  html: `
    <input id="swal-input1" class="swal2-input" placeholder="Name" value="${card.category}">
    <input id="swal-input2" class="swal2-input" placeholder="Course" value="${card.recipename}">
    <input id="swal-input3" class="swal2-input" placeholder="Course" value="${card.description}">
    <input id="swal-input4" class="swal2-input" placeholder="Course" value="${card.URL}">


  `,
  focusConfirm: false,
  preConfirm: () => {
        return [document.getElementById("swal-input1").value,
       document.getElementById("swal-input2").value,
       document.getElementById("swal-input3").value,
       document.getElementById("swal-input4").value
      ]
  }
}
);
console.log(formValues);
// updation:-
const { error } = await supabase
  .from('Receipe')
  .update({ 
 "URL" : formValues[3],
"description" : formValues[2],
"category" : formValues[0],
"recipename" : formValues[1],
  })
  .eq('id', card.id)
  if(error){
    console.log(error)
  }else{
    console.log("done!")
    window.location.reload()
  }
}


const deleteBtn = async(card)=>{
console.log("okk")
try{
  const response = await supabase
  .from('Receipe')
  .delete()
  .eq('id', card.id)
  window.location.reload()
}catch(error){
  console.log(error)
}
  
}

  return (
     (condition === false) ? <>   
      
<div className="saved-bookmarks">

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

          <div className="bookmark-actions">

            <button type="button" onClick={()=> editBTn(item)} className="edit-btn">
              ✎ Edit
            </button>

            <button type="button" onClick={()=> deleteBtn(item)} className="delete-btn">
              🗑 Delete
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>
</>:
    <><UIbookmark/></>
  )
}

export default Bookmarks