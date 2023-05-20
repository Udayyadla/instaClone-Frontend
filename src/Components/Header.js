import React from "react";
import icon from "../Images/icon.svg";
import camera from "../Images/camera.png";
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
        <div id="box1">
            <img id="image1" src={icon} alt=""/>
            <h1 id="heading">Instaclone</h1>
            <img id="image2" src={camera} alt="" onClick={() => navigate("/addpost")} />
        </div>
        </>
    )
}

export default Header