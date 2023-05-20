import React from 'react';
import { useNavigate } from 'react-router-dom';
import lens from '../Images/lens.png';
import './landingPage.css';



export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <div>
            <img src={lens} alt=""/>
        </div>
        <div className='text'>
            <h1>10x Team 04</h1>
            <button id='btn' onClick={() => navigate("/postview")}>Enter</button>
        </div>
    </div>
  );
}
