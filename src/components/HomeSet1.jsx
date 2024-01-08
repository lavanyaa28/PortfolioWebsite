import React from 'react'
import Projects from './Projects'

export default function HomeSet1() {
  return (
    <div>
      <div className="container d-flex flex-row justify-content-between" >
        <div>picture</div>
        <div style={{width:'65vh'}}>
              I am an aspiring software engineer who loves to build stuff and solve problems. An ambitious engineer who loves to play around with software and create innovative things. What would you do if you had a software expert available at your fingertips?
        </div>
      </div>
      <div className="my-100"> 
        <Projects/>
      </div>

      <div>
        WHat I know
      </div>
    </div>
  )
}
