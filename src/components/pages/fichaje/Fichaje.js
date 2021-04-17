import React, { } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import './res/StylesSheets/Fichaje.css';

import carousel1 from "./res/images/Imagen 11.jpg";
import carousel2 from "./res/images/Imagen 22.jpg";
import carousel3 from "./res/images/Imagen 23.jpg";
import carousel4 from "./res/images/Imagen 24.jpg";
import carousel5 from "./res/images/Imagen 25.jpg";
import carousel6 from "./res/images/Imagen 26.jpg";

import Carousel from  'react-bootstrap/Carousel';


function Fichaje(){

    return(
        <div className="App">
 
            <section class= "quienes-somos-section">
                <h1>
                    El Pedagógico listo para su entrega de fichas del 12 al 30 de
                    abril.
                </h1>
                <div>
                    <p>
                        El Centro de Estudios de Bachillerato 6/4 Cd. Delicias, mejor conocido como
                        el Pedagógico, se encuentra listo para su entrega de fichas para el examen de
                        admisión 2021.
                    </p>
                    <p>
                        Este año la solicitud de fichas se realizará preponderantemente <b>en línea</b> a
                        partir del <b>12 de abril a través de la página www.ceb64.com</b> y los aspirantes
                        que no cuenten con Internet podrán acudir al plantel a llenar su solicitud.
                    </p>
                    <p>
                        La mecánica es la siguiente: los aspirantes realizan su registro en línea y al día
                        siguiente acuden al plantel a entregar una copia de su <b>CURP y de un
                        comprobante de domicilio</b> , para luego recibir su guía impresa y su pase para
                        el examen de admisión. El costo de la ficha es de <b>120 pesos</b>. 
                    </p>
                    <p>
                        El examen se llevará a cabo el <b>25 de junio a partir de las 7:30 de la mañana</b> .
                        Cabe recordar que el año pasado el CEB 6/4 brindó a los aspirantes la
                        posibilidad de realizar su examen en línea o presencial, respetando todos los
                        protocolos aprobados por la autoridad educativa y de salud.
                    </p>
                    <p>
                        El Centro de Estudios de Bachillerato 6/4 es la escuela con mayor crecimiento
                        en los últimos años y se ha convertido en la mejor opción educativa no solo
                        en Delicias, sino en toda la región Centro Sur del Estado.
                        En el Pedagógico contamos con cerca de 1500 alumnos convencidos de la
                        Calidad de nuestra Escuela, por lo cual te invitamos a sumarte a nuestro
                        plantel y estudiar el Bachillerato General con el cual podrás ingresar a
                        cualquier Universidad, Tecnológico o Normal.
                    </p>
                    <p>
                        Algunas de las principales fortalezas que distinguen al pedagógico son:
                    </p>
                    <div class="listaaa">
                        <ul>
                            <li>Excelentes resultados académicos</li>
                            <li>Alumnos con interés por estudiar</li>
                            <li>Docentes calificados y certificados</li>
                            <li> La aportación de padres es la más baja de 
                                la ciudad</li>
                            <li>Becas Benito Juárez para sus alumnos</li>
                            <li>Agradable y sano ambiente escolar</li>
                            <li>Instalaciones seguras y equipadas, 
                                además transporte hacia el plantel</li>
                            <li> Convivencia y múltiples actividades 
                                sociales, culturales y equipos deportivos</li>
                            <li>Capacitaciones: Contabilidad, Pedagogía, 
                                Higiene y Salud, Informática, Diseño.</li>
                            <li>El más alto nivel en el padrón de calidad 
                                entre las escuelas de la región</li>
                        </ul>
                    </div>
                        <p>
                            Hoy en día, el sistema educativo tiene los espacios suficientes para que
                            ningún estudiante de la región se quede sin estudiar su preparatoria. Te
                            invitamos a ser parte de nuestra comunidad educativa.
                        </p>
                        <p>
                            Cualquier duda por favor comunicarse al teléfono 6394729828, whatsapp
                            6391198568 o al correo ceb64@dgb.email
                        </p>
                        <h3>¡Orgullosamente CEB 6/4!</h3>     
                </div>
            </section>

            <section class= "gallery-section">
                <div>
                    <h2>Galería</h2>

                    <Carousel className ="galeria">
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel1} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel2} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel3} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel4} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel5} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <img class="d-block w-75" src={carousel6} alt="Second slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </section>
        </div>

    );
}

export default Fichaje;