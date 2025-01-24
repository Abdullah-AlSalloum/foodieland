import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { ImFacebook } from "react-icons/im";
import { FaXing } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";



function UpperBar() {

    return (

        <div className=" upperbar">
            <MenuIcon className="menuIcon" />
            <h1 className="logo">foodieland<span>.</span></h1>
            <div className="tabs">
                <ul className="nav section-tab">
                    <li><a href="home">Home</a></li>
                    <li><a href="recipes">Recipes</a></li>
                    <li><a href="blog">Blog</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="about">About us</a></li>
                </ul>
            </div>
            <div className="tabs media">
                <ul className="nav">
                    <li><a href="https://www.facebook.com/"><ImFacebook /></a></li>
                    <li><a href="www.x.com"><FaXing /></a></li>
                    <li><a href="www.instagram.com"><FiInstagram /></a></li>
                </ul>
            </div>
        </div>






    );

}
export default UpperBar;