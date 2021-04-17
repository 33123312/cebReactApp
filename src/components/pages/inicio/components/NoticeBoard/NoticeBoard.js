import React, {useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from './images/imagen-banner.jpg';
import './NoticeBoard.css';

function NoticeBoard() {

    return (
    <section > 
        <Carousel>
            <Carousel.Item>

            <div class="cortina"></div>
                    <div class="convocatoria-ingreso" >
                        <div class="convocatoria-ingreso-card">
                            <h1> 
                                Del 12 al 30 de abril el Pedagógico realizará su entrega de
                                fichas para el examen de admisión 2021
                            </h1>
                            <p>
                                La solicitud se har+a a través de esta página web y de manera presencial para
                                los que no cuentan con Internet
                            </p>

                            <a type="button" class="btn btn-warning btn-lg" href="/fichaje">Conoce más</a>
                        </div>
                    </div>
                    
                    <img class = "d-block w-100" src={carouselImg1} alt="imagen-alumnos" />
            </Carousel.Item>
        </Carousel>
    </section>
    
  );
}

export default NoticeBoard;
