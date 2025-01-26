import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MaskGroup from "../../assets/MaskGroup.png";
import hotRecipes from "../../assets/hotRecipes.png";
import { MdTimer } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import badge from "../../assets/Badge.png";


import "swiper/css";
import "./styles.css";


const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
const time = date.getDate() + " " + monthName + " " + date.getFullYear();


function Carousel() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className='container imgSlide'>

                        <div className="container leftText">
                            <img className="badgee" src={badge} alt="badge" />
                            <div className="hotRecipesButton">
                                <img src={hotRecipes} alt="Hot Recipes" />
                                <p>Hot Recipes</p>
                            </div>


                            <div className="textSlide">
                                <h1>Spicy delicious
                                    <br />chicken wings</h1>

                                <p>Then a blood tests is carried out in a lab and the reports are delivered online
                                    <br />Then a blood tests is carried out in a lab and the reports are delivered.</p>
                            </div>
                            <div className="buttonSlide">
                                <button><MdTimer />30 Minuts</button>
                                <button><TbToolsKitchen2 />Chicken</button>
                            </div>
                            <div className="programmer">
                                <div><FaUserAlt /></div>
                                <div>
                                    <p>Abdullah AL SALLOUM</p>
                                    <p>{time}</p>
                                </div>
                                <button>View Recipes <FaPlayCircle /></button>

                            </div>
                        </div>
                        <img src={MaskGroup} alt="Mask Group" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;
