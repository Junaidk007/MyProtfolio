import { useState } from 'react'
import './App.css'

import SideNav from './SideNav'
import { Route, Routes } from 'react-router-dom'
import Hero from './Hero'
import Skills from './Skills'
import Project from './Project'
import About from './About'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  let [ham, setHam] = useState(false);

  let handelHam = () => {
    setHam(!ham);
  }
  "col-lg-2 d-none d-lg-block p-0 d-flex "
  return (
    <>
      <div className='container-fluid p-0'>
        <div className={ham ? "d-none" : "position-absolute top-2 start-0 secondaryBtn hambtn ms-3 mt-3"} style={{ width: "50px", height: "50px", zIndex: "999", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", padding: "0" }} >
          <i className="fa-solid fa-bars fs-5" onClick={handelHam}></i>
        </div>
        <div className=" d-flex p-0 overflow-hidden" style={{ maxHeight: "100dvh" }}>
          <div className={ham ? "col-2 d-flex slideNav" : "d-none"} style={{ background: "#F8F9FA", borderRight: "1px solid #E5E7EB" }}>
            <SideNav setHam={handelHam} />
          </div>
          <div className={ham ? "col-10 p-0 mainwin overflow-y-scroll" : "col-12 p-0 overflow-y-scroll"} >
            <Hero />
            <Skills />
            <Project />
            <About />
          </div>
        </div>
      </div>
    </>
  )
}

export default App


{/* <div className='mainPage'>
  
</div>   */}