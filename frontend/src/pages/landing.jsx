import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

export default function Landingpage() {
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
            <p> Join as Guest</p>
            <p>Register</p>
            <div role="button">
              <p>Login</p>
            </div>
          </div>
        </nav>

        <div className="landingMainContainer">
          <div>
            <h1><span style={{ color: "#FF9839" }}>Connect with your loved ones</span></h1>
            <p>Cover a distance by MeetWave</p>
            <div role='button'>
              <Link to={"/home"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src='/mobile.png' alt="image" />
          </div>
        </div>

      </div>
    </div>
  )
}

