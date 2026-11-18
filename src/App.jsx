import { useState } from 'react'
import React from 'react'
import { supabase } from './SupabaseClient'
import { BrowserRouter } from 'react-router-dom'


import Navbaar from './Components/Navbaar'
import Hero from './Components/Hero'

export const App = () => {
  return (
   <>
  <BrowserRouter>
   <Navbaar/>
  </BrowserRouter>
   
   </>
  )
}


export default App
