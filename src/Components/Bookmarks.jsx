import React from 'react'


import {  useNavigate } from 'react-router-dom'
import { supabase } from '../SupabaseClient'
import { useState,useEffect } from 'react'
import UIbookmark from './UIbookmark'
import Card from './Card'


const Bookmarks = () => {
  const navigate = useNavigate("")
  let [show,showSet] = useState([])


 useEffect(()=>{

  const uiRender = async()=>{
  const { data, error } = await supabase
  .from('Receipe')
  .select()
  console.log(data)
console.log(error);
showSet(data);

}
uiRender()
 },[])




  return (
     show && show.length > 0 ? <>
          <div className="bookmark-grid">

      {show.map((item) => (
        <Card key={item.id} item={item} />
      ))}

    </div>
     </> : <>
     <UIbookmark/>
     </>
  )
}

export default Bookmarks