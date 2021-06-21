import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from './images/imagen-banner-1.jpeg';
import './NoticeBoard.css';

function NoticeBoard() {

    return (
    <section className="noticeBoard_section gen-sec-grid"> 
        <Carousel>
            <Carousel.Item>
            <div class="cortina"></div>
                    <div class="convocatoria-ingreso" >
                        <div class="convocatoria-ingreso-card">
                            <h2> 
                                Todo listo en el Pedagógico para el examen de admisión 2021
                            </h2>
                            <p>
                                El vienes 28 presentarán examen los aspirantes cuya primer letra de su apellido paterno sea de la A-K y el lunes 28 los jóvenes cuyo apellido inicie de la L-Z.
                            </p>

                            <a type="button" class="btn btn-warning btn-lg" href="/admision">Conoce más</a>
                        </div>
                    </div>
                    
                    <img class = "d-block w-100" src={carouselImg1} alt="imagen-alumnos" />
            </Carousel.Item>

        </Carousel>
    </section>
    
  );
}

export default NoticeBoard;
