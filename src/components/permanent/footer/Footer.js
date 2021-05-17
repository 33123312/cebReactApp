import React from 'react';
import './Footer.css'
import './Footer-p.css'

import facebookIcon from './res/facebook.png'

function Footer(){

    return(
        <div className="App">
            <footer>
                <div className="links">
                    <div>
                        <p>Links Externos</p>
                        <ol>
                            <li><a href="https://www.gob.mx/sep2 ">SEP</a></li>
                            <li><a href="https://www.dgb.sep.gob.mx/ ">DGB</a></li>
                        </ol> 
                    </div>
                    <div>
                        <p>Contáctanos</p>
                        <ol>
                            <li>Teléfono: 639-472-98-28, 639-132-13-96 </li>
                            <li>Correo: ceb64@dgb.email </li>
                            <li>Whatsapp: 639-119-85-68</li>
                        </ol> 
                    </div>
                </div>

                <div className="social-media">
                    <p>Síguenos en nuestras redes</p>
                    <div><a href="https://www.facebook.com/CEB-64-Delicias-Oficial-118038293439048/">
                        <img src={facebookIcon} alt="faceIcon"/>
                    </a>
                    </div>
                </div>

            </footer>
            <div className = "ubi">
                <p>Delicias, Chihuahua</p>
                <p>Privada de Guadalupe 108</p>
            </div>
        </div>
    );
}


export default Footer;