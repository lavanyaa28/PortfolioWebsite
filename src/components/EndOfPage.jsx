import React from 'react'

export default function EndOfPage() {
  const d = new Date();
  const y=d.getFullYear();
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom" style={{height:'34px'}}>
           <div className="container-fluid"> 
           <div >
            <p className="text-muted" style={{marginTop:'3px',fontFamily:'Indie Flower'}}>
           <img src="src\assets\copyright-svgrepo-com.svg" style={{width:'12px',height:'12px'}} ></img> {y} Lavanya Gautam
           </p></div>
        <span >
           <button type="button" className='btn-sm btn'> <a href="https://github.com/lavanyaa28?tab=repositories"><img src="src\assets\github.svg"></img></a></button>
           <button type="button" className='btn-sm btn'> <a href="https://www.linkedin.com/in/lavanya-gautam-963770210"> <img src="src\assets\linkedin.svg"></img></a></button>
          </span>  
          
         
  </div>
</nav>
    </div>
  )
}
