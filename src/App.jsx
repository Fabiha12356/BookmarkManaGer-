import { useState } from 'react'
import React from 'react'
import { supabase } from './SupabaseClient'

export const App = () => {
  console.log(supabase);
  return (
    <div>App</div>
  )
}


export default App
