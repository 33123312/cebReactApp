import React from 'react';
import{ Link } from 'react-router-dom';


function New ({titulo,texto,img,buttons}){
    console.log(buttons)
    return (
    <div>
        <div className="convocatoria-ingreso" >
            <div className="convocatoria-ingreso-card">
                <h2> 
                    {titulo}
                </h2>
                <p>
                    {texto}
                </p>
                <div className= "banner_buttons_continer">
                    {createButtons(buttons)}
                </div>
            </div>
        </div>
        
        <img className = "d-block w-100 car-img" src={img} alt="imagen-alumnos" />

    </div>
    )
}

function createButtons(buttons){
    let buttonsTxt = [];

    buttons.forEach(element => {
        if("link" in element)
            buttonsTxt.push(createbutton1(element))
        else
            buttonsTxt.push(createbutton(element))
    });

    return buttonsTxt
}

function createbutton1 (specs){
    return  <Link to= {specs.link} style={ {color:"black"}}><a type="button" className="btn btn-warning btn-lg" >{specs.txt}</a></Link>
}

function createbutton (specs){
    return (<a href = {specs.url} download type="button" className="btn btn-warning btn-lg " >{specs.txt}</a>)
}

export default New