import React from 'react'
import Projects from './Projects'
import IconsSetting from './IconsSetting'
import HomeSet1 from './HomeSet1'
import HomeEnd from './HomeEnd'

export default function Home() {
  return (
    <div className="makeItBlue" id="makeItAppear">
        <IconsSetting/>
        <div style={{marginTop:'200px'}}></div>
        <Projects/>
        <HomeEnd/>

      
    </div>
  )
}
