import React, { useState } from "react";
import LogoFace from "../Images/facebook.png"
import LogoTel from "../Images/telephone_4367049.png"
import LogoNovaGlicerio from '../Images/logo sem bg.png'
import LogoInsta from "../Images/Icons/instagram.png"
import "../Css/Header.css"


import { register } from "swiper/element/bundle";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from 'swiper/react'


register()



const images = [
    { id: "1", image: 'https://revistatrip.uol.com.br/upload/2019/07/5d375df1b40e9/1002x563x960x540x21x11/trip283-catadores-corpo-3.jpg?t=1563910689807' },
    { id: "2", image: 'https://revistatrip.uol.com.br/upload/2019/07/5d375cc361bb5/trip283-catadores-corpo.jpg' },
    { id: "3", image: 'https://revistatrip.uol.com.br/upload/2019/07/5d375d4142982/trip283-catadores-corpo-2.jpg' },
    { id: "4", image: 'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/343687902_959065621884477_5425081704815515692_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Lu9iKyEgOAcAX_NQwmq&_nc_ht=scontent-gru2-2.xx&oh=00_AfCVzTBaEhu4x6NWvVGm_qn9UgUA_sjJ-odEoT6216B-Tg&oe=64F520FE' }
];

const Header = () => {

    const [check, setCheck] = useState(false);
    
    function menuDisplay() {

        setCheck(!check)
        

    }



    return (
        <>
            <div className="containerHeader" style={{ display: "flex", alignItems: "center", justifyContent: 'space-around', background: "#1e2967", width: "100%" }}>

                
                <div  className="menuResponsivo">
                    <div className="menuResponsivo">
                        <input type="checkbox" id="checkbox-menu" onClick={menuDisplay} />
                        <label className="headerLabel" htmlFor="checkbox-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>

                <div className="DivLogoDesk">
                    <img  style={{ width: "150px", borderRadius: "500px", backgroundColor: "white" }} src={LogoNovaGlicerio} alt="" />
                </div>

                <div>
                    <a href="https://m.facebook.com/profile.php/?id=100064174627408&locale=ms_MY" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoFace} alt="logo facebook" />
                    </a>

                    <a href="tel:" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoTel} alt="logo facebook" />
                    </a>

                    <a href="tel:" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoInsta} alt="logo instagram" />
                    </a>
                </div>

            </div>

            <div onClick={menuDisplay} className="Menu-Opcoes">
                <ul onClick={menuDisplay} style={{ display: check ? "block" : "none" }}>

                    <li onClick={menuDisplay}> <a onClick={menuDisplay} href="#/moedamudas">Corre Moeda Mudas</a></li>
                    <li onClick={menuDisplay}> <a href="/">Missao</a></li>
                    <li onClick={menuDisplay}> <a href="/">Valores</a></li>
                    <li onClick={menuDisplay}> <a href="/">Coleta Seletiva</a></li>
                    <li onClick={menuDisplay}> <a href="/">Separacao e Destinacao</a></li>
                    <li onClick={menuDisplay}> <a href="/">Transparencia</a></li>
                    <li onClick={menuDisplay}> <a href="/">Prestacao de Servico</a></li>
                    <li onClick={menuDisplay}> <a href="/">Meio Ambiente</a></li>
                    <li onClick={menuDisplay}> <a href="/">Desenvolvimento Cultural e Social</a></li>
                </ul>
            </div>


            <div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'black',
                        '--swiper-pagination-color': 'white',

                    }}
                    autoplay
                    effect="fade"
                    speed={5000}
                    slidesPerView={2}
                    onAutoplayTimeLeft={1000}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {
                        images.map((item) => (
                            <SwiperSlide key={item.id}>
                                {/* <img  className="LogoImg" style={{ right: "5px", position: "fixed", width: "150px", borderRadius: "500px", backgroundColor: "#d5e9fbb3" }} src={LogoNovaGlicerio} alt="logotipo da associacao nova glicerio" /> */}
                                <img
                                    src={item.image}
                                    alt="slider"
                                    className="slider-item"

                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Header;
