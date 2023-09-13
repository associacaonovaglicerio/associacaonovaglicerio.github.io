
import { useState } from "react";
import "../Css/MoedaMudas.css"
import Footer from "./Footer";


import LogoFace from "../Images/facebook.png"
import LogoTel from "../Images/telephone_4367049.png"
import LogoNovaGlicerio from '../Images/logo sem bg.png'
import LogoInsta from "../Images/Icons/instagram.png"
import LogoYoutube from "../Images/Icons/youtube.png"
import MoedaMudasAds from "../Images/moedaMudasAds.jpg"

function MoedaMudas() {


    const [check, setCheck] = useState(false);

    function menuDisplay() {

        setCheck(!check)
    }


    return (
        <>
            <header>

                <div className="containerHeader" style={{ display: "flex", alignItems: "center", justifyContent: 'space-around', background: "#1e2967", width: "100%" }}>

                    <div className="menuResponsivo">
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
                        <img style={{ width: "150px", borderRadius: "500px", backgroundColor: "white" }} src={LogoNovaGlicerio} alt="" />
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

                <div className="Menu-Opcoes">
                    <ul style={{ display: check ? "block" : "none" }}>

                        <li onClick={menuDisplay}> <a href="/">Inicio</a></li>
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

                <div className="menuMoedaMudas">
                    <ul className="ulMoedaMudas">
                        <li> <a href="/">Inicio</a></li>
                        <li> <a href="/">Missao</a></li>
                        <li> <a href="/">Valores</a></li>
                        <li> <a href="/">Coleta Seletiva</a></li>
                        <li> <a href="/">Separacao e Destinacao</a></li>
                        <li> <a href="/">Transparencia</a></li>
                        <li> <a href="/">Prestacao de Servico</a></li>
                        <li> <a href="/">Meio Ambiente</a></li>
                        <li> <a href="/">Desenvolvimento Cultural e Social</a></li>
                    </ul>
                </div>
            </header>

            <div className="mainMoedaMudas">
                <img className="moedaMudasAds" src={MoedaMudasAds} alt="Foto Explicando Sobre o Corre Moeda Mudas" />
            </div>
            <div className="DivYoutube">
                <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RaPC92xjY8g"                   
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <Footer />
        </>
    )
}

export default MoedaMudas;