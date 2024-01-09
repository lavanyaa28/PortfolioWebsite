import React from 'react'

export default function IconsSetting() {
  return (
    <div >
      <div className="d-flex flex-row justify-content-around"style={{marginTop:'20vh',fontFamily:'cinzel'}} >
          <div >
          <img src="/assets/globe2.svg" style={{height:'60px',color:'white'}}></img>

          <div style={{marginTop:'10px'}}> World class Apps</div>
          </div>
          <div>
          <img src="/assets/bricks.svg" style={{height:'60px'}}></img>
          <div style={{marginTop:'10px'}}> Tailored To Your Needs</div>
          </div>
          <div>
          <img src="/assets/pen.svg" style={{height:'60px'}}></img>
          <div style={{marginTop:'10px'}}> Pixel Perfect Code</div>
          </div>
          <div>
          <img src="/assets/heart.svg" style={{height:'60px'}}></img>
          <div style={{marginTop:'10px'}}> Built With Love</div>
          </div>
        </div>

        <div className='d-flex flex-row' style={{marginTop:'70px', marginLeft:'60vh',marginRight:'60vh'}}>
            <div style={{width:'100vw',fontSize:'23px'}}>
                Hey, I'm Lavanya Gautam, nice to meet you. Please take a look around!
            </div>

            <div style={{marginLeft:'17px'}}>
            I am an aspiring software engineer who loves to build stuff and solve problems. An ambitious engineer who loves to play around with software and create innovative things. What would you do if you had a software expert available at your fingertips?
            </div>

        </div>
    </div>
  )
}
