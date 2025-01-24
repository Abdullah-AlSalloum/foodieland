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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
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