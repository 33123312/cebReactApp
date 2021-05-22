import React from "react"
import "./res/styleSheets/Diseno.css"
import "./res/styleSheets/Diseno-p.css"

import fondo from "./res/images/fondo-diseño.jpg"

function Diseno(){
    return(
        <div>
            <section className="diseno-intr-sec">
            <img src={fondo}  className = "imagen-fondo-intr"/>

                <div className = "div-cont-inf ">

                    
                    <div className=" media-container-div-info cap-intr-media">

                        <iframe width="715" height="482" src="https://www.youtube.com/embed/qRKpL8_n7zA" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    </div>

                    <div className = "car-container-div-info intr-card">
                        <div>
                            <h2 className="cap-int-card-title-diseno">El Arte es una expresión del amor o no es nada
                                <p className="cap-int-card-title-diseno-rem">
                                    Diseño
                                </p>
                            </h2>
                            
                            <p className="cap-int-card-text-diseno">
                            
                            Esta capacitación permite estudiar y desarrollar las manifestaciones artísticas mediante reflexiones conceptuales,
                            técnicas de dibujo e historia del arte y la estética. El arte brinda un campo ocupacional muy amplio, 
                            estimulan la creatividad y el acercamiento del mundo a la imaginación, colaborando de esta forma a construir un mundo más sano.

                            </p>

                        </div>

                    </div>
                </div>          
            </section>



        </div>

    )
}



export default Diseno