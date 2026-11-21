import React from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate } from 'react-router-dom'

import "./CreateBookmark.css"
const CreateBookmark = () => {

    const navigate = useNavigate("")
  
const formSubmit = async(e)=>{
e.preventDefault()
console.log("okkk")

let userData = new FormData(e.target)
let userInfo = Object.fromEntries(userData)
console.log(userInfo)

if(Object.values(userInfo).some(fields => !fields.trim())){
    return;
}


try{
const { data: { user } } = await supabase.auth.getUser()

const { error } = await supabase
  .from('Receipe')
  .insert({ 
   "URL" : userInfo.url,
"description" : userInfo.description,
"category" : userInfo.category,
"recipename" : userInfo.title,
"users-id" : user.id
   })
 console.log("no wayy")
   if(error){
 console.log(error)
   }else{
     navigate("/bookmarks", 
        {
            state : {condition : false}
        }

     )
   }
}catch(error){
  Swal.fire({
  title: "Are you sure?",
  text: "Did you create your account ?",
  icon: "warning", 
})

}

   e.target.reset()
}

const emptyForm =(e) =>{
    e.preventDefault()
    console.log("okkk")
  e.target.closest("form").reset();
}





 return (
    <div className="add-bookmark-page">

      <div className="add-bookmark-card">

        <div className="add-bookmark-heading">
          <span>✦ BOOKNEST</span>
          <h1>Add New Bookmark</h1>
          <p>Save your favorite websites in one place.</p>
        </div>

        <form  onSubmit={formSubmit} className="bookmark-form">

          <label>Website Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. YouTube, GitHub"
          />

          <label>Website URL</label>
          <input
            type="url"
            name="url"
            placeholder="https://example.com"
          />

          <label>Category</label>
          <select name="category">
            <option value="">Select Category</option>
            <option value="Development">Development</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Design">Design</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>

          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Write something about this website..."
          />

          <div className="bookmark-form-buttons">

            <button onClick={emptyForm} type="button" className="cancel-bookmark">
              Cancel
            </button>

            <button type="submit" className="save-bookmark">
              + Save Bookmark
            </button>

          </div>

        </form>

      </div>

    </div>
  )

}

export default CreateBookmark