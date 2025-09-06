import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Landingpage() {

const router = useNavigate()

  return (
    <div className='LandingPageContainer'>
      <div
        className="landingPageContainer"
        style={{ background: 'url("/background.png")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <nav>
          <div className='navHeader'>
            <h1>MeetWave</h1>
          </div>
          <div className='navlist'>
            <p onClick={() =>{
              router("/q78qse5")
            }}> Join as Guest</p>
            <p  onClick={() => {
              router("/auth")
            }}>Register</p>
            <div onClick={() => {
              router("/auth")
            }} role="button">
              <p >Login</p>
            </div>
          </div>
        </nav>

        <div className="landingMainContainer">
          <div>
            <h1><span style={{ color: "#FF9839" }}>Connect with your loved ones</span></h1>
            <p>Cover a distance by MeetWave</p>
            <div role='button'>
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src='/mobile.png' alt="pic" />
          </div>
        </div>

      </div>
    </div>
  )
}

