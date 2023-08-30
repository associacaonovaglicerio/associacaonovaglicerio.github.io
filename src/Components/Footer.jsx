import "../Css/Footer.css"

import Logo from "../Images/logo sem bg.png"


function Footer() {



    return (
        <>

            <footer className="footer">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <img style={{ width: "50%", borderRadius: "500px", backgroundColor: "white" }} src={Logo} alt="Logotipo Nova Glicerio" />
                    <div>
                        <h3>Endereco Principal:</h3>
                        <p>Avenida Do Estado, 4434, Sao paulo - SP - 01516-000</p>
                    </div>
                </div>

                <div style={{display:"flex"}}>

                    <div>
                        <ul>
                            <li>Missao</li>
                            <li>Valores</li>
                            <li>Coleta Seletiva</li>
                            <li>Desenvolvimento <br /> Cultural e Social</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Separacao e Destinacao</li>
                            <li>Corre Moedas Mudas</li>
                            <li>Transparencia</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;