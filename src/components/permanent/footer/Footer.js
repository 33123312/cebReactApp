import React from 'react';
import './Footer.css'
import facebookIcon from './res/facebook.png'

function Footer(){

    return(
        <div className="App">
            <footer>
                <div className="links">
                    <div>
                        <p>Links Externos</p>
                        <ol>
                            <li><a href="https://www.gob.mx/sep2 ">S.E.P</a></li>
                        </ol> 
                    </div>
                    <div>
                        <p>Contáctanos</p>
                        <ol>
                            <li><a>Teléfono: 639 472 98 28, 639 474 15 04 </a></li>
                            <li><a>ceb64@dgb.email </a></li>
                        </ol> 
                    </div>
                </div>
                <div className="social-media">
                    <p>Siguenos en nuestras redes</p>
                    <div><a href="https://www.facebook.com/CEB-64-Delicias-Oficial-118038293439048/">
                        <img src={facebookIcon} alt="faceIcon"/>
                    </a>
                    </div>
                </div>

            </footer>
            <div className = "ubi">
                <p>Delicias, Chihuahua</p>
                <p>Guadalupe 108, Flores del Tepeyac</p>
            </div>
        </div>
    );
}


export default Footer;