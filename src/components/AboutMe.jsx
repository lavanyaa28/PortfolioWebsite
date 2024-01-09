import React from 'react'

export default function AboutMe() {
  return (
    <div style={{marginTop:'21px'}} className= "coverBg">
      <div className="d-flex flex-column" style={{left:'0',backgroundColor:'rgb(19, 45, 123)'}}>
        <div className="d-flex flex-row" >
            <div>
                <img src="/assets/portfolioPicture.jpeg" style={{height:'43vw',width:'60vh'}}></img>
            </div>
            <div style={{width:'50vw',marginLeft:'20vh',marginTop:'18vh'}}>
                <p className="changeFont">
                    Hello, My name is Lavanya Gautam. I am a software engineer who lives in Delhi, India.
                    <br/>
                    <br/>
                    <br/>
                    I have always had a passion for building stuff. Nowadays, I use this passion to design and build software applications to impact, excite and positively influence people.
                    <br/><br/><br/>
                    When I'm not busy developing, I like to induldge myself in the fantasy world of books. I also like to direct my creativity towards journaling.
                </p>
            </div>
        </div>
        <div style={{backgroundColor:'lightgray',height:'25vw'}}>
           <h2 style={{color:'rgb(19,45,123',marginTop:'15px',fontFamily:'cinzel'}}>Education and specialisation</h2> 
            <div className="d-flex flex-row" style={{marginTop:'30px'}}>
                <div className='borderEdu text-muted' style={{backgroundColor:'gainsboro'}}>
                    <h5 style={{color:'rgb(19,45,123)'}}>Bachelors Of Technology</h5>
                    2020-24 <br/>
                    Gautam Buddha University, Gr. Noida<br/>
                    CGPA:9.46<br/>
                </div>
                <div className='borderEdu text-muted' style={{backgroundColor:'gainsboro'}}>
                <h5 style={{color:'rgb(19,45,123)'}}>Class XII</h5>
                    2019-20<br/>
                    Modern School, Noida<br/>
                    95%

                </div>
                <div className='borderEdu text-muted' style={{backgroundColor:'gainsboro'}}>
                <h5 style={{color:'rgb(19,45,123)'}}> Class X</h5>
                    2019-20<br/>
                    Modern School, Noida<br/>
                    88%
                </div>
            </div>
        </div>
      </div>
     

    </div>
  )
}

