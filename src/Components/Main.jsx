import React from "react";
import Countup from "./Countup";
import "../Css/Main.css";


import Missao from "../Images/Icons/missao.png"
import Valores from "../Images/Icons/valores.png"
import Coleta from "../Images/Icons/Coleta.png"
import Separacao from "../Images/Icons/Separacao.png"
import MoedasMudas from "../Images/Icons/moedasMudas_upscaled.png"
import Transparencia from "../Images/Icons/transparencia.png"
import Prestacao from "../Images/Icons/prestacao.png"
import MeioAmbiente from "../Images/Icons/meioAmbiente.png"
import Desenvolvimento from "../Images/Icons/desenvolvimento.png"


function Main() {

    return (
        <>
            <Countup />

            <div className="container">

                <div>
                    <a href="/moeda-mudas" target="_blank" > <img src={MoedasMudas} alt="Corre Moedas Mudas" /></a>
                    <span>Corre Moeda Mudas</span>
                </div>

                <div>
                    <img src={Missao} alt="Missao" />
                    <span>Missao</span>
                </div>

                <div>
                    <img src={Valores} alt="Valores" />
                    <span>Valores</span>
                </div>

                <div>
                    <img src={Coleta} alt="Coleta Seletiva" />
                    <span>Coleta Seletiva</span>
                </div>

                <div>
                    <img src={Separacao} alt="Separacao e Destinacao" />
                    <span>Separacao e Destinacao</span>
                </div>

                <div>
                    <img src={Transparencia} alt="Transparencia" />
                    <span>Transparencia</span>
                </div>
                <div>
                    <img src={Prestacao} alt="Prestacao De Servicos" />
                    <span>Prestacao de Servicos</span>
                </div>
                <div>
                    <img src={MeioAmbiente} alt="Meio Ambiente" />
                    <span>Meio Ambiente</span>
                </div>
                <div>
                    <img src={Desenvolvimento} alt="Desenvolvimento Cultural" />
                    <span>Desenvolvimento Cultural</span>
                </div>
                
            </div>
        </>
    )
}

export default Main;