import { useState } from 'react'
import React from 'react'
import { supabase } from './SupabaseClient'


import Navbaar from './Components/Navbaar'
import Hero from './Components/Hero'

export const App = () => {
  return (
   <>
   <Navbaar/>
   <Hero/>
   
   </>
  )
}


export default App
