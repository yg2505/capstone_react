import React from 'react'
import Hero from "./hero.jsx"
 

const home = ({onNavigate}) => {
  return (
    <div>
        <Hero onNavigate={onNavigate}/>
    </div>
  )
}

export default home
