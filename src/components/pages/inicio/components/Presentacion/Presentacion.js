import React from 'react';
import './Presentacion.css';
import './Presentacion-p.css';
import imgInicio from './res/imagen-inicio.jpg';

function Presentacion(){
    return(
        <div className="App">
            <section class="presentacion-section">

                <div class="static-Info">
                    <div class="cuerpo">
                        <h1 class="titulo-presentacion">¡Te damos la bienvenida al sitio web oficial del  ceb 6/4!</h1>
                        <p>
                            El Centro de Estudios de Bachillerato 6/4, mejor conocido como "El Pedagógico", es una de las mejores instituciones educativas de nivel medio superior en el estado de Chihuahua, lo cual no es algo sorprendente, ya que tanto alumnos como padres de familia conocen el compromiso que tienen todos los miembros del plantel con la educación de los alumnos, pues contamos con el equipo necesario y  profesores altamente calificados  para garantizar que aquellos que cursen en esta escuela egresarán preparados para continuar con sus estudios; o bien, desempeñar con profesionalismo cualquier labor.
                        </p>
                        <img src={imgInicio} class="imgInicio d-block w-75" alt = "imagen inicio" />
                    </div>
                </div>

                <div class="widgets ">
                    
                    <div class="anu generic-anu"> 
                        <div class="p">Consulta tus calificaciones.</div>
                        <form className = "cosulta-calif" ENCTYPE="multipart/form-data" method="post" action="/boleta/leer.php">
                            <p>No. de Control: </p>
                            <input  TYPE="text" NAME="matri" SIZE="15" VALUE="" maxlength="6" />
                            <p>Contraseña:</p>
                            <input TYPE="password" NAME="clave" SIZE="15" VALUE="" maxlength="6" /> 
                            <input type="submit" class="p-btn" value= "Consultar" />
                        </form>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Presentacion;