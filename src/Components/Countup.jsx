import React from 'react';
import CountUp from 'react-countup';

import toneladasRecicladas from "../Images/Icons/reciclados.png";
import catadores from "../Images/Icons/catadores.png"
import mapaPino from "../Images/Icons/mapa-pino-2.png"
import cooperativas from "../Images/Icons/cooperativas-3-ancat.png"
import "../Css/Countup.css"

function Countup() {
    

    return (
        <div className="Countup">

            <div className='Container-Counter'>
                <img src={toneladasRecicladas} alt="Lixo Reciclado" />
                <div className="count-container">
                    <CountUp start={0} end={496890} duration={2} separator="," />
                </div>
                <p>Mil Toneladas Recuperados</p>
            </div>
            <div className='Container-Counter'>
                <img src={catadores} alt="catadores" />
                <div className="count-container">
                    <CountUp start={0} end={160} duration={2} separator="," />
                </div>
                <p>Catadores Associados</p>
            </div>
            <div className='Container-Counter'>
                <img src={mapaPino} alt="icone mapa" />
                <div className="count-container">
                    <CountUp start={0} end={30} duration={2} separator="," />
                </div>
                <p>Km`s Alcancados</p>
            </div>
            <div className='Container-Counter'>
                <img src={cooperativas} alt="Desenho de uma cooperativa" />
                <div className="count-container">
                    <CountUp  start={0} end={500} duration={2} separator="," />
                </div>
                <p>Missoes Concluidas</p>
            </div>

        </div>
    );
}

export default Countup;
