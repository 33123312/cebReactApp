import React from "react"
import "./res/styleSheets/Conta.css"
import "./res/styleSheets/Conta-p.css"

import tax from "./res/images/tax.png"
import admn from "./res/images/admon.jpg"
import nom from "./res/images/nomina.jpg"



function Conta(){

    return(
        <div>
            <section className="intr-sec-cont">                

                <div className="div-panels-cont div-cap-abs">
                    <div className="media-div-cont">
                        <iframe className="video-conta" height="400" src="https://www.youtube.com/embed/aj32FQItn_4" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div >

                    <div className="card-div-cont">

                        <div className= "cap-card">

                            <h1 className= "intr-card-cont-title">
                                Comprende las finanzas en todos sus niveles<br></br>
                                <b className="res-title-intr-cont"> Contabilidad</b>
                            </h1>


                            <p className="intr-card-cont-text">
                                En contabilidad estudiarás del mundo de las finanzas, más específicamente, los movimientos económicos que ocurren
                                desde el nivel personal al de una empresa, esto, para proporcionar información de confianza sobre los resultados 
                                de la entidad evaluada obtenidos en un periodo de tiempo determinado., para que así, basados en esa información
                                se puedan aplicar técnicas y crear estrategias con el objetivo de mejorar el rendimiento de la empresa o persona.
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section className="materias-sec-cont">
                <div className="materias-cont-cont">
                    <h1 className="mater-cont-tit-pres">
                        En la capacitación, llevarás materias muy <b className="mat-cont-res-title">interesantes y formativas</b>, entre ellas:
                    </h1>
                </div>
            </section>
            <section className="div-sec admon-sec">
                <div className="div-panels-cont">

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-cont">
                                Administración
                            </h4>

                            <div className ="text-card" >
                                Así como un ingeniero diseña un motor de forma que todas sus partes trabajen a la perfección en conjunto para obtener el 
                                mejor rendimiento, un administrador hace lo mismo con una organización, en administración, estudiarás las técnicas para 
                                manejar el dinero de la forma más productiva posible, esto no sólo enfocado a las organizaciones, lo aprendido aquí también 
                                puede ser aplicado a la vida personal, para llevar los gastos del hogar de una manera más eficaz.

                            </div>
                        </div>
                    </div>
                    <div className="media-div-cont">
                        <img src={admn} className="img-cap-div"></img>
                    </div >
                    
                </div>

            </section>


            <section className="div-sec epidem-sec">
                <div className="div-panels-cont">

                     <div className="media-div-cont">
                        <img src={tax} className="img-cap-div"></img>
                    </div >

                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-cont">
                                Impuestos
                            </h4>

                            <div className ="text-card" >
                                Todos pagamos impuestos de una forma u otra, de manera que, a la hora de contabilizar las ganancias de una persona, empresa 
                                o entidad, es importante tomar en cuenta este gasto y saber calcularlo correctamente. 
                                En esta materia aprenderás cómo funciona el sistema tributario en nuestro país,  
                                los diferentes mecanismos por los cuales los ciudadanos y organizaciones pagan sus impuestos, cuáles son las  
                                consecuencias de no cumplir con las normas tributarias, y bajo qué condiciones se pagan o no ciertos tipos de impuesto. 
                            </div>
                            
                        </div>
                    </div>


                    
                </div>
            </section>



            <section className="div-sec admon-sec">
                <div className="div-panels-cont">



                    <div className="card-div-cont">
                        <div className= "cap-card">
                            <h4 className="subT-card sub-card-cont">
                                Nómina
                            </h4>

                            <div className ="text-card" >
                                Aprende cómo calcular correctamente cuanto es lo que se le debe de pagar a un empleado, esto es útil tanto si deseas convertirte
                                en un emprendedor y necesitas contratar gente, como si eres un empleado, ya que así te asegurarás de que lo que se te pague 
                                sea lo justo.
                            </div>
                        </div>
                    </div>
                    <div className="media-div-cont">
                        <img src={nom} className="img-cap-div"></img>
                    </div >
                    
                </div>
            </section>


        </div>
    )
        
    
}


export default Conta;