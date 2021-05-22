import React from 'react';
import './res/StylesSheets/Ubicacion.css';
import './res/StylesSheets/Ubicacion-p.css';

function Ubicacion() {
    return (
        <section className="ubicacion-section gen-sec-grid" >
                 <iframe className ="google-maps"

                 src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3517.394063636666!2d-105.47482833928832!3d28.164928787024973!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1507330807005" 
                  height="450" frameborder="0" style={{border:0}} allowfullscreen />
            <div className="car-ubi">
                <p><b>Nombre: </b>Centro de Estudios de Bachillerato 6/4</p>
                <p><b>Dirección:</b> Privada de Guadalupe 108, Delicias, Chih.</p>
                <p><b>Teléfono: </b>639 472 98 28, 639 474 15 04</p>
            </div>
        </section>
    );

}

export default Ubicacion;