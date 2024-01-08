import React from 'react'
import $ from 'jquery'
import IconsSetting from './IconsSetting';
import Projects from './Projects';
import HomeEnd from './HomeEnd';
import {Link} from 'react-router-dom';



export default function Intro() {
  return (
    <div>
    <div className=" makeItBig bg-dark" id="makeItDisappear" style={{visibility:'true'}}>
    <div className="bg-dark introLine"style={{color:'beige',marginTop:'30vh', fontSize:'40px'}}  >
      Not <br></br>Your Regular<br></br> Software <br></br>Engineer
    </div>
    <div className="my-3"style={{color:'beige'}}>
      Ready to turn your <i>ideas </i>into <i>reality</i>
    </div>
    <Link to="/go" style={{color:'beige'}}><button className="my-0" id="disappearingBtn">&darr;</button></Link>
  </div>
  </div>
  )
}

