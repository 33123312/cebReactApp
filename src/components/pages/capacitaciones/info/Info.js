import React from "react"
import "./res/styleSheets/info.css"
import "./res/styleSheets/info-p.css"

import fondoIntr from  "./res/images/fondo-intr.jpg"

import hojas from "./res/images/hojas.jpg"
import marketing from "./res/images/marketing.jpg"
import man from "./res/images/man.jpg"
import photo from "./res/images/photo.jpg"
import program from "./res/images/program.jpg"
import web from "./res/images/web.jpg"

function Info(){
    return (
        <div>
            <section className="inf-intr-sec">
            <img src={fondoIntr}  className = "imagen-fondo-intr"/>
                <div className = "div-cont-inf ">

                    
                    <div className=" media-container-div-info cap-intr-media">
                        <iframe 
                        src="https://www.youtube.com/embed/RHphhS7XiHM"  title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen />
                        
                    </div>

                    <div className = "car-container-div-info intr-card">
                        <div>
                            <h2 className="cap-int-card-title-info">Domina el mundo de la computación en <p className="cap-int-card-title-info-rem">Informática</p></h2>
                            
                            <p className="cap-int-card-text-info">
                            
                                Aprende todo lo que necesitarás para ser un experto del mundo digital, 
                                Así mismo, si lo que buscas es estudiar una carrera en ingenieria, esta capacitación es ideal para ti, ya que tiene materias 
                                muy importantes relacionadas con las matemáticas, como cálculo y física, que te ayudarán en tu camino para convertirte en el ingeniero
                                que deseas ser.

                            </p>

                        </div>

                    </div>
                </div>          
            </section>

            <section className="habs">
                <div className = "general-info">

                    <h2 className="subtitle-habs subtitle">En la Capacitación de Informática podrás adquirir muchas <b className="title-marked-hab">Habilidades</b></h2>
                    
                    <div className="habs-cards-cont">

                    <div className="hab-card">

                        <img src={program}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Programación</h5>
                                    
                                    <p >
                                        Crea software y sistemas de información con bases de datos
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="hab-card">

                            <img src={marketing}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Marketing digital</h5>
                                    
                                    <p >
                                        Vender productos y servicios por internet es el presente y el futuro, 
                                        ¡asegúrate de vender mas que nadie!
                                    </p>


                                </div>

                            </div>

                        </div>
                        <div className="hab-card">

                            <img src={man}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Hardware de computadoras</h5>
                                    
                                    <p >
                                        Aprende los componentes físicos de una computadora, su función,  y como mantenerlos en buen estado
                               
                                    </p>


                                </div>

                            </div>

                        </div>
                        

                    </div>
                    <div className="habs-cards-cont">

                        <div className="hab-card">

                            <img src={photo}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Diseño digital</h5>
                                    
                                    <p >
                                        Aprende a editar fotografías como un profesional con Photoshop,
                                        o crea tus propias ilustraciones usando Corel Draw
   
                                    </p>


                                </div>

                            </div>

                        </div>
                        <div className="hab-card">

                            <img src={web}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Diseño web</h5>
                                    
                                    <p >
                                        Diviértete creando y diseñando tus propias páginas web
  
                                    </p>


                                </div>

                            </div>

                        </div>
                        <div className="hab-card">

                            <img src={hojas}  className = "imagen-hojas"/>

                            <div >
                                <div>
                                    <h5 >Hojas de cálculo</h5>
                                    
                                    <p >
                                        Las hojas de caculo son una forma facil y eficaz de organizar 
                                        información y realizar operaciones con ésta
                                    </p>


                                </div>

                            </div>

                        </div>

                        

                    </div>

                </div>          
            </section>

            <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
            <a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
            <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
            <a href="http://www.freepik.com">Designed by Freepik</a>
            <a href="http://www.freepik.com">Designed by stories / Freepik</a>
            
        </div>


    )

}

export default Info;