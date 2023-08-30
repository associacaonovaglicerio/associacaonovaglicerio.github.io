import React, { useState } from "react";
import LogoFace from "../Images/facebook.png"
import LogoTel from "../Images/telephone_4367049.png"
import LogoNovaGlicerio from '../Images/logo sem bg.png'
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
    { id: "4", image: 'https://revistatrip.uol.com.br/upload/2019/07/5d375a9f5634b/trip283-catadores-header.jpg' },
];

const Header = () => {

    const [check, setCheck] = useState(false);

    function menuDisplay() {

        setCheck(!check)
    }


    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', background: "#1e2967", width: "100%" }}>
                <div>
                    <div className="menuResponsivo">
                        <input type="checkbox" id="checkbox-menu" onClick={menuDisplay} />
                        <label className="headerLabel" htmlFor="checkbox-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                {/* <div className="DivNomeLogo">
                        <h3>Associacao</h3>
                        <h3>Nova Glicerio</h3>
                    </div> */}

                <div className="DivLogoDesk">
                    <img style={{ width: "150px", borderRadius: "500px", backgroundColor: "white" }} src={LogoNovaGlicerio} alt="" />
                </div>




                <div>
                    <a href="https://m.facebook.com/profile.php/?id=100064174627408&locale=ms_MY" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoFace} alt="logo facebook" />
                    </a>
                    <a href="tel:" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoTel} alt="logo facebook" />
                    </a>
                </div>
            </div>

            {/* <div className="Menu-Desktop">
                <ul>
                    <li>Missao</li>
                    <li>Valores</li>
                    <li>Coleta Seletiva</li>
                    <li>Separacao e Destinacao</li>
                    <li>Corre Moedas Mudas</li>
                    <li>Transparencia</li>
                    <li>Prestacao de Servico</li>
                    <li>Meio Ambiente</li>
                    <li>Desenvolvimento Cultural e Social</li>
                </ul>
            </div> */}

            <div className="Menu-Opcoes">
                <ul style={{ display: check ? "block" : "none" }}>

                    <li onClick={menuDisplay}> <a href="/home/solucoes">Missao</a></li>
                    <li onClick={menuDisplay}> <a href="/home/solucoes">Valores</a></li>
                    <li onClick={menuDisplay}> <a href="/home/sobre-nos">Coleta Seletiva</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Separacao e Destinacao</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Corre Moedas Mudas</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Transparencia</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Prestacao de Servico</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Meio Ambiente</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Desenvolvimento Cultural e Social</a></li>
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
                    slidesPerView={1}
                    onAutoplayTimeLeft={1000}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {
                        images.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img style={{ right: "5px", position: "fixed", width: "150px", borderRadius: "500px", backgroundColor: "#d5e9fbb3" }} src={LogoNovaGlicerio} alt="logotipo da associacao nova glicerio" />
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
