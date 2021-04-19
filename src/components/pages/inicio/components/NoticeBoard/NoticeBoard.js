import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import carouselImg2 from './images/imagen-banner2.jpg';
import carouselImg1 from './images/imagen-banner1.jpg';
import './NoticeBoard.css';

function NoticeBoard() {

    return (
    <section className="noticeBoard_section"> 
        <Carousel>
            <Carousel.Item>
            <div class="cortina"></div>
                    <div class="convocatoria-ingreso" >
                        <div class="convocatoria-ingreso-card">
                            <h2> 
                                Del 12 al 30 de abril el Pedagógico realizará su entrega de
                                fichas para el examen de admisión 2021
                            </h2>
                            <p>
                                La solicitud se hará a través de esta página web y de manera presencial para
                                los que no cuentan con Internet
                            </p>

                            <a type="button" class="btn btn-warning btn-lg" href="/fichaje">Conoce más</a>
                        </div>
                    </div>
                    
                    <img class = "d-block w-100" src={carouselImg2} alt="imagen-alumnos" />
            </Carousel.Item>

            <Carousel.Item>
            <div class="cortina" />
                <div class="convocatoria-ingreso" >
                    <div class="convocatoria-ingreso-card">
                        <h2> 
                            Inicia la entrega de fichas para el examen de admisión 2021
                        </h2>
                        <p>
                            Del 12 al 30 de abril registra tu solicitud en línea y al día siguiente preséntate en el plantel a recoger tu guía de estudios impresa
                            Para mayor información, comunícate al teléfono 6394729828 y vía whatsapp 6391198568
                        </p>

                        <a type="button" class="btn btn-warning " href="https://forms.gle/gz8jVE6YVdyY1VHM7">REGÍSTRATE AQUÍ</a>
                    </div>
                </div>
                
                <img class = "d-block w-100 img-banner" src={carouselImg1} alt="imagen-alumnos" />
            </Carousel.Item>
        </Carousel>
    </section>
    
  );
}

export default NoticeBoard;
