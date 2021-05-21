import React from 'react';
import './res/StylesSheets/Transporte.css';

function Top() {
    return (
      <section className="transporte-tables gen-sec-grid">
        <div>
            <p>
                En estas tablas, se muestran las rutas que siguen los autobuses al servicio del plantel, así como sus respectivos horarios.
            </p>
        <table>

            <tr>
                <td colspan="6" class="kk">Matutino</td>
            </tr>
            <tr class="b">
                <th>Número</th>
                <th>Ruta 1</th>
                <th>Ruta 2</th>
                <th>Ruta 3</th>
                <th>Ruta 4</th>
                <th>Ruta 5</th>
            </tr>

            <tr>
                <th >Hora de inicio</th>
                <th>7:05 AM</th>
                <th>7:05 AM</th>
                <th>6:55 AM</th>
                <th>7:05 AM</th>
                <th>6:50 AM</th>
            </tr>

            <tr class="b">
                <th>Ruta</th>
                <th>
                    <ul class = "lo">
                        <li>Esc Leyes de Reforma</li>
                        <li>Reloj público</li>
                        <li>Ave. Del Parque</li>
                        <li>Campanario</li>
                        <li>Ave. Plutarco</li>
                        <li>Alpura</li>
                        <li>Ave. Las Torres</li>
                        <li>C.E.B</li>
                    </ul>
                </th>

                <th>
                    <ul class = "lo">
                        <li>Plaza De La Madre</li>
                        <li>Plaza Santuario</li>
                        <li>Glendale</li>
                        <li>C.E.B</li>
                    </ul>
                </th>

                <th>
                    <ul class = "lo">
                        <li>Plaza Carranza</li>
                        <li>Mercado Morelos</li>
                        <li>C.E.B</li>
                    </ul>
                </th>

                <th>
                    <ul class = "lo">
                        <li>Calza Del Charro</li>
                        <li>Ave. Solidaridad</li>
                        <li>Santa Gertrudis</li>
                        <li>Ave. Fernando Baeza</li>
                        <li>C.E.B</li>
                    </ul>
                </th>

                <th>
                    <ul class = "lo">
                        <li>Iglesia Col. Lotes Urbanos</li>
                        <li>OxxO col. Lotes Urbanos</li>
                        <li>Flamingo</li>
                        <li>Ave. solidaridad</li>
                        <li>Cielo vista</li>
                        <li>Ave. industrias</li>
                        <li>Super M</li>
                        <li>Oxxo</li>
                        <li>Transcardel</li>
                        <li>Alpura</li>
                        <li>Ave. De Las Torres</li>
                        <li>C.E.B</li>
                    </ul>
                </th>
            </tr>

        </table>

        <table>
        <tr><td colspan="4" class="kk" >Vespertino</td></tr>


        <tr class="b">
        <th>Número</th>
        <th>Ruta 1</th>
        <th>Ruta 2</th>
        <th>Ruta 3</th>
        </tr>


        <tr >
            <th>Hora</th>
        <th>12:40 PM</th>
        <th>12:15 PM</th>
        <th>12:15 PM</th>
        </tr>



        <tr class="b">
        <th>Ruta</th>
            
        <th><ul class = "lo">
        <li>Plaza Carranza</li>
        <li>C.E.B</li>
        </ul>
        </th>


        <th>
        <ul class = "lo">
        <li>Plaza Carranza HR</li>
        <li>Mercado Morelos</li>
        <li>Ave, 10 sur</li>
        <li>CONALEP</li>
        <li>Alpura</li>
        <li>Ave industrias</li>
        <li>Transcardel</li>
        <li>OXXO</li>
        <li>Ave. 2 sur</li>
        <li>Gym. Prresidentes</li>
        <li>Ave. Fernando Baeza</li>
        <li>C.E.B</li>
        </ul>
        </th>


        <th>
            <ul class = "lo">
                <li>CIPRESES</li>
                <li>Col. Obrera</li>
                <li>Col. Carmen Serdán</li>
                <li>Paseo Las Virgenes</li>
                <li>Santa Gertrudis</li>
                <li>OXXO</li>
                <li>Ave Fernando Baeza</li>
                <li>Ave. Del Parque</li>
                <li>Calle 2</li>
                <li>Ave. Fernando Baeza</li>
                <li>C.E.B</li>
            </ul>
        </th>
        </tr>
            
            
        </table>
        </div>
    </section>  
    );
}

export default Top;