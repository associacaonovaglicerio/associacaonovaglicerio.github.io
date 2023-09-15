import React, { useState } from "react";
import LogoFace from "../Images/facebook.png"
import LogoTel from "../Images/telephone_4367049.png"
import LogoNovaGlicerio from '../Images/logo sem bg.png'
import LogoInsta from "../Images/Icons/instagram.png"
import LogoYoutube from "../Images/Icons/youtube.png"
import "../Css/Header.css"

import Slide1 from "../Images/Fotos Zl/01-empilha.jpeg"
import Slide2 from "../Images/Fotos Zl/02-empilha.jpeg"
import Slide3 from "../Images/Fotos Zl/03-caminhao.jpeg"
import Slide4 from "../Images/Fotos Zl/04-plasticoReciclado.jpeg"
import Slide5 from "../Images/Fotos Zl/05-prensa.jpeg"
import Slide6 from "../Images/Fotos Zl/06-prensados.jpeg"
import Slide7 from "../Images/Fotos Zl/07-prensadosEmpilha.jpeg"
import Slide8 from "../Images/Fotos Zl/08-patio.jpeg"
import Slide9 from "../Images/Fotos Zl/09-carregandoCaminhao.jpeg"
import Slide10 from "../Images/Fotos Zl/10-patioPrensa.jpeg"
import Slide11 from "../Images/Fotos Zl/11-prensadosFoco.jpeg"
import Slide12 from "../Images/Fotos Zl/12-container.jpeg"
import Slide13 from "../Images/Fotos Zl/13-containers.jpeg"
import Slide14 from "../Images/Fotos Zl/14-sacoGarrafas.jpeg"
import Slide15 from "../Images/Fotos Zl/15-CarregadorCarrinho.jpeg"
import Slide16 from "../Images/Fotos Zl/16-containersPrensas.jpeg"
import Slide17 from "../Images/Fotos Zl/17-containerPrensaAlinhados.jpeg"
import Slide18 from "../Images/Fotos Zl/18-catadores.jpeg"
import Slide19 from "../Images/Fotos Zl/19-containerNovaGlicerio.jpeg"
import Slide20 from "../Images/Fotos Zl/20-prensados.jpeg"


import { register } from "swiper/element/bundle";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from 'swiper/react'


register()


const images = [
    { id: "1", image: Slide1 },
    { id: "2", image: Slide2 },
    { id: "3", image: Slide3 },
    { id: "4", image: Slide4 },
    { id: "5", image: Slide5 },
    { id: "6", image: Slide6 },
    { id: "7", image: Slide7 },
    { id: "8", image: Slide8 },
    { id: "9", image: Slide9 },
    { id: "10", image: Slide10 },
    { id: "11", image: Slide11 },
    { id: "12", image: Slide12 },
    { id: "13", image: Slide13 },
    { id: "14", image: Slide14 },
    { id: "15", image: Slide15 },
    { id: "16", image: Slide16 },
    { id: "17", image: Slide17 },
    { id: "18", image: Slide18 },
    { id: "19", image: Slide19 },
    { id: "20", image: Slide20 },
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
                    <img  style={{ width: "150px", borderRadius: "500px", backgroundColor: "white",margin: "10px" }} src={LogoNovaGlicerio} alt="" />
                </div>

                <div>
                    <a href="tel:1132077680" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoTel} alt="logo telefone" />
                    </a>

                    <a href="https://m.facebook.com/profile.php/?id=100064174627408&locale=ms_MY" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoFace} alt="logo facebook" />
                    </a>

                    <a href="https://instagram.com/a.catadoresnovagliceriooficial?igshid=MzRlODBiNWFlZA==" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoInsta} alt="logo instagram" />
                    </a>

                    <a href="https://youtu.be/s30S9C0wQd8?si=9EXgNphVGQEVepLl" rel="noreferrer" target="_blank">
                        <img style={{ maxWidth: "35px", margin: "5px 15px" }} src={LogoYoutube} alt="logo instagram" />
                    </a>
                </div>

            </div>

            <div onClick={menuDisplay} className="Menu-Opcoes">
                <ul onClick={menuDisplay} style={{ display: check ? "block" : "none" }}>

                    <li onClick={menuDisplay}> <a onClick={menuDisplay} href="../#/moedamudas">Corre Moeda Mudas</a></li>
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
                                <img  className="LogoImg" style={{ right: "5px", position: "fixed", width: "150px", borderRadius: "500px", backgroundColor: "#d5e9fbb3" }} src={LogoNovaGlicerio} alt="logotipo da associacao nova glicerio" />
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
