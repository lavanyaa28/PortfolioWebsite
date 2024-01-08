import React from 'react'

export default function Projects() {
  return (
    <div className='bg-orange-200 '>
        <h2 style={{color:'white'}}>Projects I have built</h2>
        <div className="d-flex flex-row mb-3" style={{marginTop:'80px',marginRight:'30px',marginLeft:'90px',marginBottom:'30px'}}>
        <div className="card" style={{ marginLeft:'10px',marginRigth:'10px',width:'20vw',padding:'5px'}}>
        <div className="card-body">
            <h5 className="card-title">Sorting Visualizer</h5>
                <p className="card-text"> Sorting Visualizer visualizes various sorting algorithms. It is a demonstration my thinking skills as well as my web development skills.t shows my capability of creating a web app as well as logic. HTML,CSS,JavaScript is used in this program. </p>
                <a href="https://github.com/lavanyaa28/Sorting_Visualizer" className="btn btn-primary">View More</a>
        </div>
       </div>
       <div className="card" style={{marginLeft:'10px',marginRigth:'10px',width:'20vw',padding:'5px'}}>
        <div className="card-body">
            <h5 className="card-title"> Travel Advisor</h5>
                <p className="card-text"> Created a web application with HTML, CSS, JavaScript and API’s to visually help people travelling to new places. It shows my capability of creating a web app. This innovative application is designed to provide crisp and efficient guidance to travelers of all kinds. </p>
                <a href="https://github.com/lavanyaa28/Travel_Advisor" className="btn btn-primary">View More</a>
        </div>
       </div>
       <div className="card" style={{marginLeft:'10px',marginRigth:'10px',width:'20vw',padding:'5px'}}>
        <div className="card-body">
            <h5 className="card-title">MyNewsApp</h5>
                <p className="card-text">React-based news application that combines the power of React’s component-driven architecture, efficient state management, and seamless integration with APIs to deliver a responsive, dynamic, and user-friendly  platform for accessing the latest news.</p>
                <a href="https://github.com/lavanyaa28/MyNewsApp" className="btn btn-primary">View More</a>
        </div>
       </div>
       <div className="card" style={{marginLeft:'10px',marginRigth:'10px',width:'20vw',padding:'5px'}}>
        <div className="textImg"></div>
        <div className="card-body">
            <h5 className="card-title">Text-Utils</h5>
                <p className="card-text">Text Utils, a simple yet powerful text utilities project. With essential functions like word counting, word reversal, and word clearing, our project simplifies text manipulation tasks. Efficiently analyze and transform text with ease using Text Utils.</p>
                <a href="https://github.com/lavanyaa28/Text_Utils" className="btn btn-primary">View More</a>
        </div>
       </div>
       
    </div>
      
    </div>
  )
}
