import React from 'react'
import {Link} from 'react-router-dom';




export default function Header() {
  
  return (
    <div>
     
     <nav className="navbar  fixed-top bg-dark"> 

        <div className="container-fluid" >
          
          <Link className="navbar-brand" style={{color:'beige',fontFamily:'varela round'}}>Lavanya Gautam</Link>
          
              <span style={{color:'blanchedalmond', fontFamily:'Indie Flower'}}>
              <Link to="/home" style={{marginLeft:'4px',marginRight:'4px',color:'blanchedalmond'}}>Home</Link>
              <Link to="/about" style={{marginLeft:'4px',marginRight:'4px',color:'blanchedalmond'}}>About</Link>
               <a href="https://drive.google.com/file/d/1kl_K2Xeh_-8Lflfsw1s53Mkex_uvk8dI/view?usp=sharing" style={{marginLeft:'4px',marginRight:'4px',color:'blanchedalmond'}}>Resume</a>
              </span>
 
    </div>
</nav>
    </div>
  )
}
