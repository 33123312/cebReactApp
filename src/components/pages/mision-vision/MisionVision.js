import React, { } from 'react';


import './res/StyleSheets/MisionVision.css';
import './res/StyleSheets/MisionVision-p.css';

import "bootstrap/dist/css/bootstrap.min.css"

function MisionVision() {
  return (
    <div className="App">
        <section className="quienes gen-sec-grid">
            <div>
                <h1>¿Quiénes Somos?</h1>
                <p>
                El Centro de Estudios de Bachillerato 6/4, mejor conocido como "El Pedagógico", es una de las mejores instituciones educativas de nivel medio superior en el estado de Chihuahua, lo cual no es algo sorprendente, ya que tanto alumnos como padres de familia conocen el compromiso que tienen todos los miembros del plantel con la educación de los alumnos, pues contamos con el equipo necesario y profesores altamente calificados para garantizar que aquellos que cursen en esta escuela egresarán preparados para continuar con sus estudios; o bien, desempeñar con profesionalismo cualquier labor.
                </p>
            </div>
        </section>

        <section className="mision-vision">
            <div className="mision">
                <h2>Misión</h2>
                <p>
                    Proporcionar educación de buena calidad del tipo medio superior en el bachillerato general, que permita a los estudiantes comprender y participar activamente en la sociedad de su tiempo, así como continuar con sus estudios de educación superior. Así mismo, promover la operación óptima de las instituciones educativas del nivel coordinadas por la Dirección General del Bachillerato.
                </p>

            </div>

            <div className="vision">
                <h2>Visión</h2>
                <p>
                Actualizar de manera permanente un currículum flexible que se construye conjuntamente con las instituciones coordinadas y que atiende a las necesidades de la sociedad y de sus propios usuarios. Para ello, la Dirección General del Bachillerato cuenta con normas, lineamientos y procedimientos sencillos, completos y oportunos que propician la permanencia de los estudiantes en su proceso educativo, así como el egreso en la Educación Media Superior y dispone de un programa para la formación, capacitación y actualización permanente para el personal docente y administrativo, así como de un sistema de gestión de la calidad que facilita la interacción entre los ámbitos estatal y federal.
                </p>
            </div>
        </section>
    </div>
  );
}

export default MisionVision;