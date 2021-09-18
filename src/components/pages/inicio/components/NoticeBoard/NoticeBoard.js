import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from './images/imagen-banner-1.jpeg';
import carouselImg2 from './images/image-banner-2.jpg';
import carouselImg3 from './images/imagen-prov.jpg';

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
                                    Cursos de inducción e información de inicio de clases para alumnos de primer semestre
                                </h2>
                                <p>
                                    En el Pedagógico, nos encontramos listos para el regreso a las aulas cumpliendo todos los protocolos y 
                                    disposiciones en materia de salud, por lo que el miércoles 1 de septiembre iniciamos el ciclo escolar 
                                    2021-2022 a través de dos etapas que se detallan en el siguiente documento:
                            
                                </p>
                                <div className= "banner_buttons_continer">
                                    <a href = "https://www.ceb64.com/regresoClases.pdf" download type="button" class="btn btn-warning btn-lg " >Ver PDF</a>
                                </div>
                            </div>
                        </div>
                        
                        <img class = "d-block w-100" src={carouselImg1} alt="imagen-alumnos" />
                </Carousel.Item>
            <Carousel.Item>
                <div class="cortina"></div>
                        <div class="convocatoria-ingreso" >
                            <div class="convocatoria-ingreso-card">
                                <h2> 
                                    Información de grupos y calendario de inscripción para los alumnos de nuevo ingreso
                                </h2>
                                <p>
                                    Si eres de nuevo ingreso, puedes consultar tanto tu grupo como tu fecha y hora de inscripción en los siguientes enlaces:
                            
                                </p>
                                <div className= "banner_buttons_continer">
                                    <a href = "https://www.ceb64.com/grupos.pdf" download type="button" class="btn btn-warning btn-lg " >Grupos de 1er Semestre</a>
                                    <a href = "https://www.ceb64.com/inscripciones.jpeg" download type="button" class="btn btn-warning btn-lg " >Calendario y horario de inscripciones</a>
                                </div>
                            </div>
                        </div>
                        
                        <img class = "d-block w-100" src={carouselImg3} alt="imagen-alumnos" />
                </Carousel.Item>
            <Carousel.Item>
                <div class="cortina"></div>w
                        <div class="convocatoria-ingreso" >
                            <div class="convocatoria-ingreso-card">
                                <h2> 
                                    Resultados del Examen de Admisión 2021
                                </h2>
                                <p>
                                    Sirva el presente para felicitarles por su esfuerzo en el examen de ingreso y darle la más cordial bienvenida al Centro de 
                                    Estudios de Bachillerato 6/4 “Ciudad Delicias “
                                </p>
                                <div className= "banner_buttons_continer">
                                    <a href = "https://www.ceb64.com/listaAceptados2021.pdf" download type="button" class="btn btn-warning btn-lg " >Lista de aceptados</a>
                                    <Link to="/admision-info" style={ {color:"black"}}><a type="button" class="btn btn-warning btn-lg" >Información para la inscripción</a></Link>
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
