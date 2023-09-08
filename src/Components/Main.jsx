import React from "react";
import Countup from "./Countup";
import "../Css/Main.css";
import { Link } from "react-router-dom";

import MissaoImg from "../Images/Icons/missao.png"
import Valores from "../Images/Icons/valores.png"
import Coleta from "../Images/Icons/Coleta.png"
import Separacao from "../Images/Icons/Separacao.png"
import MoedasMudas from "../Images/Icons/moedasMudas_upscaled.png"
import Transparencia from "../Images/Icons/transparencia.png"
import Prestacao from "../Images/Icons/prestacao.png"
import MeioAmbiente from "../Images/Icons/meioAmbiente.png"
import Desenvolvimento from "../Images/Icons/desenvolvimento.png"


function Main() {

    function scrollToDiv(TargetId) {
        const div1 = document.getElementById(TargetId);
        div1.scrollIntoView({ behavior: 'smooth' });
    };
    



    return (
        <>
            <Countup />

            <div className="container">

                <div >
                    <Link to="/moedamudas" > <img src={MoedasMudas} alt="Corre Moedas Mudas" /></Link>
                    <span>Corre Moeda Mudas</span>
                </div>

                <div onClick={() => scrollToDiv('MissaoDiv')}>
                    <img src={MissaoImg} alt="Missao" />
                    <span>Missao</span>
                </div>

                <div onClick={() => scrollToDiv('ValoresDiv')}>
                    <img src={Valores} alt="Valores" />
                    <span>Valores</span>
                </div>

                <div onClick={() => scrollToDiv('ColetaDiv')}>
                    <img src={Coleta} alt="Coleta Seletiva" />
                    <span>Coleta Seletiva</span>
                </div>

                <div onClick={() => scrollToDiv('SeparacaoDiv')}>
                    <img src={Separacao} alt="Separacao e Destinacao" />
                    <span>Separacao e Destinacao</span>
                </div>

                <div onClick={() => scrollToDiv('TransparenciaDiv')}>
                    <img src={Transparencia} alt="Transparencia" />
                    <span>Transparencia</span>
                </div>
                <div onClick={() => scrollToDiv('PrestacaoDiv')}>
                    <img src={Prestacao} alt="Prestacao De Servicos" />
                    <span>Prestacao de Servicos</span>
                </div>
                <div onClick={() => scrollToDiv('AmbienteDiv')}>
                    <img src={MeioAmbiente} alt="Meio Ambiente" />
                    <span>Meio Ambiente</span>
                </div>
                <div onClick={() => scrollToDiv('DesenvolvimentoDiv')}>
                    <img src={Desenvolvimento} alt="Desenvolvimento Cultural" />
                    <span>Desenvolvimento Cultural</span>
                </div>
            </div>

            <div>
                <div id="MissaoDiv" className="HeaderMissao">
                    <div className="H1Div">
                        <h1>Missao</h1>
                    </div>
                </div>

                <div className="MainMissao">
                    <div>
                        <h3>
                            A missão da associação é promover a inclusão socioeconômica das pessoas que trabalham com materiais recicláveis dentro do município da cidade de São Paulo.<br />
                            O trabalho diferenciado feito a partir de catadores avulsos e uma organização de venda coletiva e convívio coletivo na forma de divisão dos gastos e sistema de rateio entre todos os associados possibilita que a associação venha desenvolver seu papel fundamental na cadeia de destinação de resíduos, hoje dentro do município da cidade de São Paulo.
                        </h3>
                    </div>
                </div>
            </div>

            <div>

                <div id="ValoresDiv" className="HeaderValores">
                    <div className="ValoresH1">
                        <h1>Valores</h1>
                    </div>
                </div>

                <div className="MainValores">
                    <div style={{ padding: "10px", display: "flex", justifyContent: "flex-end"}}>
                        <h3>Com o Sistema de Gestão Democrática, Os Valores da Associação se Baseia Nos Seus Princípios de Atendimento, e com Excelência para a Coleta Seletiva e Desenvolvimento Social do Indivíduo, as Questões Psicológicas que Afetam Hoje não só a Vida Social e Individual, mas também a coletiva.
                            De fato a Promover esses Valores de Cumplicidade, Afeto, Sensibilidade, Companheirismo, Associativismo e Cooperativismo.
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main;