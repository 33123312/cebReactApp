import React from "react"

import "./res/styleSheets/styles.css"
import "./res/styleSheets/phoneStyle.css"

import teacher from "./res/images/teacher-vector.jpg"
import kid from "./res/images/kid.jpg"
import anyCareer from "./res/images/any-career.jpg"
import practicas from "./res/images/practicas.jpg"
function AuxEdu(){

    return (
        <div className = "cap-info">
            <section className="aux-edu aux-intr-sec">
                <div className = "div-cont ">

                    <div className = "car-container-div intr-card">
                        <div>
                            <h2 className="cap-int-card-title">Intervención Educativa</h2>
                            <p className="cap-int-card-text">
                                ¡Desarrolla tus habilidaades pedagógicas y conviértete en un profesional de la docencia!
                            </p>
                            <p className="cap-int-card-text">
                                En esta capacitación,
                                aprenderás los principios para introducirte al mundo de la docencia, conocerás técnicas sociales para fomentar el aprendizaje y desarrollo de habilidades en otros,
                                así como resolución de conflictos y control emocional, todo esto mediante dinámicas e interactivas clases al igual que con prácticas en diferentes ambientes educativos. 
                                Al final de la capacitación tendrás lo necesario para desempeñarte con profesionalidad en el area de docencia que prefieras.
                            </p>
                        </div>

                    </div>


                    <div className=" media-container-div cap-intr-media">
                        <iframe width="950" height="300" 
                        src="https://www.youtube.com/embed/CHaQ9Vqgltw" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen />
                        
                    </div>

                </div>

            </section>

            <section className="aux-edu aux-hab-sec">
                <div className = " div-cont ">

                   <div className="media-container-div">
                    <img src = {teacher}></img>
                   </div>     

                    <div className = "car-container-div ">
                        <div className="hab-div-cont">
                            <h2 className="subtitle">Desarrolla las habilidades del docente</h2>

                            <p className="cap-int-card-text">
                                <ul>
                                    <li>Comunicación</li>
                                    <li>Confianza</li>
                                    <li>Liderazgo</li>
                                    <li>Organización</li>
                                    <li>Trabajo en Equipo</li>
                                    <li>Empatía crítica</li>


                                </ul>
                            

                            </p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="aux-edu aux-guia-sec">
                <div className = " div-cont ">

                    <div className = "car-container-div ">
                        <div className="">
                            <h2 className="subtitle">Guíalos en todas las etapas de la educación</h2>

                            <p className="cap-int-card-text">
                                Con lo aprendido en esta capacitación, estarás preparado para ejercer en cualquier nivel educativo, desde formar a los niños en su educación preescolar y primaria, 
                                hasta guiar a los jóvenes de secundaria y la escuela media superior.
                            </p>
                        </div>

                    </div>

                                    
                    <div className="media-container-div">
                        <img src = {kid} className = "niña-img"></img>
                    </div>     

                </div>

            </section>

            <section className="aux-edu aux-hab-sec">
                <div className = " div-cont ">

                    <div className="media-container-div">
                        <img src = {practicas} className = "niña-img"></img>
                    </div>  

                    <div className = "car-container-div ">
                        <div className="">
                            <h2 className="subtitle"> 
                                Obtén experiencia laboral real
                            </h2>

                            <p className="cap-int-card-text">
                                Durante el curso, visitareemos diferentes instituciones educativas para que puedas interactuar 
                                diréctamente con los estudiantes, así podrás entender su desenvolvimiento como seres sociales y
                                serás capaz desarrollar estrategias educativas para guiarlos y formarlos.

                            
                            </p>
                        </div>

                    </div>

                                    
   

                </div>

            </section>

            <section className="aux-edu aux-hab-sec">
                <div className = " div-cont ">

                    <div className = "car-container-div ">
                        <div className="">
                            <h2 className="subtitle"> 
                                ¿Dudas tomar esta capacitación, pues no estudiarás una carrera afín a la docencia?
                            </h2>

                            <p className="cap-int-card-text">
                                Aunque no vayas a estudiar una carrera que tenga que ver con la pedagogía, esta capacitación aún es muy útil, 
                                pues la combinación de los conocimientos adquiridos esta capacitación junto con los de tus estudios universitarios, 
                                te abrirán puertas a ejercer como docente en el area en el que estés especializado, de forma que tu mercado laboral 
                                será mayor al que tendrías de no haber tomado esta capacitación, ya que podrás trabajar tanto ejerciendo tu carrera como 
                                enseñandola.


                            
                            </p>
                        </div>

                    </div>

                                    
                    <div className="media-container-div">
                        <img src = {anyCareer} className = "niña-img"></img>
                    </div>     

                </div>

            </section>
            <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
            <a href="http://www.freepik.com">Designed by gstudioimagen / Freepik</a>
            <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>

        </div>
    )

}


export default AuxEdu