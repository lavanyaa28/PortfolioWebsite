import React from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function HomeEnd() {

  $(document).ready(function(){
    $(".contactbg").mouseenter(function(){
      $(".changeShape").css("border-radius","0%");
    });
    $(".contactbg").mouseleave(function(){
      $(".changeShape").css("border-radius","200%");
    });
  })
  $(document).ready(function(){
    $(".aboutbg").mouseenter(function(){
      $(".changeShape1").css("border-radius","0%");
    });
    $(".aboutbg").mouseleave(function(){
      $(".changeShape1").css("border-radius","200%");
    });
  })

  return (
    <div className='backChange'>
     <div className="d-flex flex-row pageEnd">
        <div className="aboutbg">
          <Link to="/about">
            <button type="button" className="btn" style={{width:'50vw',padding:"10vw"}}>
            <p style={{height:'270px',width:'270px',border:'7px solid blanchedalmond',paddingTop:'120px',borderRadius:'100%', paddingBottom:'80px',color:'blanchedalmond'}} className="changeShape1"> <b>ABOUT ME</b></p>
            </button>
            </Link>
        </div>
        <div className="contactbg"> 
            <a href="https://drive.google.com/file/d/1kl_K2Xeh_-8Lflfsw1s53Mkex_uvk8dI/view?usp=sharing">
            <button  className="btn hoverFn" style={{width:'48.8vw',padding:"10vw" }}>
                <p style={{height:'270px',width:'270px',border:'7px solid rgb(19, 45, 123)',borderRadius:'100%',paddingTop:'120px',color:'rgb(19, 45, 123)' }}className="changeShape" ><b>CONTACT ME</b></p>
            </button>
            </a>
        </div>
        </div>
    </div>
  )
}
