import React from 'react'


const Favorite = ({show,showset,favrt,setFavrt}) => {
  return (
   favrt.map((item)=>{
    return(
<h1>{item.title}</h1>
    )
   })
 
   
  )
}

export default Favorite