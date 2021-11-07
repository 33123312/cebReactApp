import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from './images/imagen-banner-1.jpeg';
import carouselImg2 from './images/image-banner-2.jpg';
import carouselImg3 from './images/imagen-prov.jpg';
import NewBan from "./New"

import './NoticeBoard.css';
import{ Link } from 'react-router-dom';



function NoticeBoard() {
    
    return (
    <section className="noticeBoard_section gen-sec-grid"> 
        <Carousel>
            <Carousel.Item>
                <NewBan 
                    titulo = "Cursos de inducción e información de inicio de clases para alumnos de primer semestre"
                    texto = "En el Pedagógico, nos encontramos listos para el regreso a las aulas cumpliendo todos los protocolos y 
                    disposiciones en materia de salud, por lo que el miércoles 1 de septiembre iniciamos el ciclo escolar 
                    2021-2022 a través de dos etapas que se detallan en el siguiente documento:"
                    img = {carouselImg3}
                    buttons = {
                        [{url:"https://www.ceb64.com/regresoClases.pdf",
                        txt:"Ver PDF"}]
                    }/>
            </Carousel.Item>
            <Carousel.Item>
                <NewBan 
                    titulo = "Información de grupos y calendario de inscripción para los alumnos de nuevo ingreso"
                    texto = "Si eres de nuevo ingreso, puedes consultar tanto tu grupo como tu fecha y hora de inscripción en los siguientes enlaces:"
                    img = {carouselImg3}
                    buttons = {
                        [{url:"https://www.ceb64.com/grupos.pdf",
                        txt:"Grupos de 1er Semestre"},
                        {url:"https://www.ceb64.com/inscripciones.jpeg",
                        txt:"Calendario y horario de inscripciones"}]
                }/>
            </Carousel.Item>
            <Carousel.Item>
                <NewBan 
                    titulo = "Resultados del Examen de Admisión 2021"
                    texto = "Sirva el presente para felicitarles por su esfuerzo en el examen de ingreso y darle la más cordial bienvenida al Centro de 
                    Estudios de Bachillerato 6/4 "
                    img = {carouselImg2}
                    buttons = {
                        [{url:"https://www.ceb64.com/listaAceptados2021.pdf",
                        txt:"Lista de aceptados"},
                        {link:"/admision-info",
                        txt:"Información para la inscripción"}]
                }/>

                </Carousel.Item>
        </Carousel>
    </section>
    
  );
}

export default NoticeBoard;
