import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from './images/imagen-banner-1.jpeg';
import carouselImg2 from './images/image-banner-2.jpg';
import './NoticeBoard.css';
import{ Link } from 'react-router-dom';


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
                                El vienes 25 presentarán examen los aspirantes cuya primer letra de su apellido paterno sea de la A-K y el lunes 28 los jóvenes cuyo apellido inicie de la L-Z.
                            </p>
                            
                            <Link to="/admision" style={ {color:"black"}}><a type="button" class="btn btn-warning btn-lg" >Conoce más</a></Link>
                        </div>
                    </div>
                    
                    <img class = "d-block w-100" src={carouselImg1} alt="imagen-alumnos" />
            </Carousel.Item>
            <Carousel.Item>
            <div class="cortina"></div>
                    <div class="convocatoria-ingreso" >
                        <div class="convocatoria-ingreso-card">
                            <h2> 
                                Resultados del Examen de Admisión 2021
                            </h2>
                            <p>
                                Sirva el presente para felicitarles por su esfuerzo en el examen de ingreso y darle la más cordial bienvenida al Centro de 
                                Estudios de Bachillerato 6/4 “Ciudad Delicias “
                            </p>
                            <p>
                                Las listas de aceptados estarán disponibles en breve.
                            </p>

                            <div className= "banner_buttons_continer">
                                <Link to="/" style={ {color:"black"}}><a type="button" class="btn btn-warning btn-lg " >Lista de aceptados</a></Link>
                                <Link to="/admision-info" style={ {color:"black"}}><a type="button" class="btn btn-warning btn-lg" >Información par la inscripción</a></Link>
                            </div>
                        </div>
                    </div>
                    
                    <img class = "d-block w-100" src={carouselImg2} alt="imagen-alumnos" />
            </Carousel.Item>

        </Carousel>
    </section>
    
  );
}

export default NoticeBoard;
