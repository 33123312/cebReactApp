import React, { } from 'react';

import "./res/styeSheets/Salud.css"
import "./res/styeSheets/Salud-p.css"

import imgFondoIntr from "./res/images/intr-fondo-salud.jpg"
import anatomia from "./res/images/anatomia.jpg"
import epi from   "./res/images/epidem.jpg"
import nutri from "./res/images/nutri.jpg"
import publi from "./res/images/publica.jpg"
import sex from "./res/images/sex.jpg"
import anc from "./res/images/anc.jpg"

function Salud(){

    return(
        <div>
            <section className="intr-salud-sec">
                <img src={imgFondoIntr} className = "imagen-fondo-intr-salud"></img>
                    
                <div className="intr-card-salud">

                    <h1 className= "intr-card-salud-title">
                        Da tus primeros pasos como profesional de la salud  <br></br>
                        <b className="res-title-intr-salud"> Higiene y Salud Comunitaria</b>
                    </h1>


                    <p className="intr-card-salud-text">
                    En esta capacitación, aprenderás sobre la noble profesión de cuidar de la salud de otros, esto, 
                        por medio de diferentes técnicas y conocimientos para la prevención y tratamiento de padecimientos médicos 
                        que adquirirás a lo largo de este curso.

                    </p>


                </div>
                

            </section>

            <section className="video-salud-section">
                <iframe className="video-salud" height="538" 
                src="https://www.youtube.com/embed/O6rB0eTQXzI" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

            </section>

            <section className="mat-cap-salud">
                <div className="disc-salud-cont ">
                    <h1 className="disc-salud-tit">
                        En  <b className="disc-salud-tit-res">Higiene y Salud Comunitaria</b> estudiarás las siguientes disciplinas:
                    </h1>
                </div>
            </section>


        
            <section className="div-sec">
                <div className="div-panels-cont">
                    <div className="media-div-cont">
                        <img src={anatomia} className="img-cap-div"></img>
                    </div >
                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Bases Anátomicas y Fisiología del Cuerpo Humano</h4>

                            <div className ="text-card">
                            Comprende el funcionamiento de los complejos sistemas anatómicos que ahora mismo te mantienen vivo, 

                            en anatomía, estudiarás las partes que componen al cuerpo humano, su cohesión con otras partes y 

                            su función en los diferentes aparatos y sistemas que nos forman. 
                            </div>
                        </div>
                </div>
                </div>
            </section>

            <section className="div-sec epidem-sec">
                <div className="div-panels-cont">

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Epidemilogía</h4>

                            <div className ="text-card">
                                En epidemiología aprenderás a identificar la frecuencia y distribución de los 
                                factores físicos, biológicos, sociales, culturales y de comportamiento que amenazan  
                                la salud de la población, de forma que tu objeto de estudio será tanto de tipo 
                                biológico como social. 
                            </div>
                        </div>
                    </div>

                    <div className="media-div-cont">
                        <img src={epi} className="img-cap-div"></img>
                    </div >
                    
                </div>
            </section>

            <section className="div-sec nutri-sec">
                <div className="div-panels-cont">

                    <div className="media-div-cont">
                        <img src={nutri} className="img-cap-div"></img>
                    </div >

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Nutrición</h4>

                            <div className ="text-card">
                            En Nutrición, estudiarás el impacto que tiene la dieta en la salud de las personas, en esta materia 

aprenderás cuales son los diferentes tipos de nutrientes y minerales que necesitamos para tener  

energía y mantener las estructuras biológicas del cuerpo humano, los procesos por los cuales asimilamos dichos nutrientes, 

la función de cada uno en nuestro cuerpo, los padecimientos y consecuencias que vienen con la carencia o exceso de consumo de ciertos tipos específicos 

y los diferentes factores que pueden afectar la correcta alimentación. 

 
                            </div>
                        </div>
                    </div>


                    
                </div>
            </section>


            <section className="div-sec nutri-sec public-sec">
                <div className="div-panels-cont">

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Salud Pública</h4>

                            <div className ="text-card">
                            En Salud Pública se estudia la salud en las poblaciones. La meta es aprender a proteger la salud de la población, 
                            promover estilos de vida saludables y mejorar el estado de salud de la sociedad,
                             aquí aprenderás que los profesionistas de la salud no solo trabajan curando padecimientos con técnicas médicas,
                              también tienen que aprender a trabajar con la sociedad, para que, a través de programas de promoción se incite a 
                              la población a llevar un estilo de vida que los proteja de las enfermedades. 
                            </div>
                        </div>
                    </div>

                    <div className="media-div-cont">
                        <img src={publi} className="img-cap-div"></img>
                    </div >

                    
                </div>
            </section>

            <section className="div-sec nutri-sec">
                <div className="div-panels-cont">

                    <div className="media-div-cont">
                        <img src={sex} className="img-cap-div"></img>
                    </div >

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Salud Sexual y Reproductiva</h4>

                            <div className ="text-card">
                                En esta materia, estudiarás todo lo relacionado con la salud sexual y reproductiva, conocerás cómo funciona el aparato reproductor tanto femenino y masculino,
                                En esta materia, estudiarás todo lo relacionado con la salud sexual y reproductiva, conocerás cómo funciona el aparato reproductor tanto femenino y masculino, 

                                 las diferentes complicaciones que pueden afectar  

                                la salud de los mismos, la forma de protegerlos de enfermedades y lesiones y, en general, como llevar una vida sexual sin riesgos para la salud. Además, 

                                aprenderás acerca de planificación familiar, como funciona la concepción, gestación y las técnicas anticonceptivas que existen y el cómo acceder a ellas.


                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="div-sec nutri-sec">
                <div className="div-panels-cont">



                    <div className="card-div-cont">

                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-salud">Atención al Paciente geriático</h4>

                            <div className ="text-card">
                                Los adultos mayores son la población más vulnerable de cualquier sociedad, y muchas de las cosas que a los más
                                jóvenes no les provocan malestar o daño pueden ser muy peligrosas para los ancianos, es por esto que merece la pena estudiar 
                                los cuidados especiales que ellos necesitan para llevar una vida digna. En esta materia, estudiarás cómo se deteriora el
                                cuerpo humano con la vejez y las diferentes maneras de solventar esas funciones que se pierden con la edad.
                            </div>
                        </div>

                    </div>

                    <div className="media-div-cont">
                        <img src={anc} className="img-cap-div"></img>
                    </div >

                </div>
            </section>
        </div>

    )
}

export default Salud;