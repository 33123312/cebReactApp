import React,{useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import serverUrl from "../../../var/serverUrl";
import apiHeader from "../../../var/apiHeader";
import boletaParser from "./boletaParser";
import boletaGuiConverter from "./boletaGuiConverter";


function Boleta(){
    let [boleta,setBoleta] = useState(false)
    useEffect(a => {
        getBoleta()
            .then(boleta => setBoleta(boleta))
    },[])

    return chargeElement(boleta)
}

function chargeElement(res){
    if(res === false)
        return <div></div>
    else
        return getBoletaRows(res)

}

async function getBoleta(){

    let evas = getBoletaPetition("getEvaluaciones")
    let boleta =  getBoletaPetition("getBoleta")

    let res = {
        evaluaciones: await evas,
        boleta: await boleta
    }

    res.evaluaciones = convertArrayObjEvas(res.evaluaciones)
    res.boleta = res.boleta.data

    return res;

}

function convertArrayObjEvas(ev){
    let evas = ev.data;
    let evaluacionesArray = []

    evas.forEach(eva => evaluacionesArray.push(eva.evaluacion))

    return evaluacionesArray
}

function getSemestralesObj(boleta){
    let semestrales = boleta.boleta.semestrales
    
    let califasRow = []

    semestrales.forEach(row => {
        califasRow.push({
            materia: row.nombre_abr,
            cal_sem: row.calificacion,
            ordeen: row.orden
        })
    })


    return califasRow
}

function getBoletaRows(res){

    let rows = getSemestralesObj(res)

    let boleta = res.boleta.parciales
    let evas = res.evaluaciones

return <section class="gen-sec-grid ">
            <h1 className= "boleta-title">Boleta de calificaciones</h1>

            <Table striped bordered hover className= "tabla-boleta">
                <thead>
                    <tr>
                        <th>Materia</th>
                        {getParCells(evas,getFaltasTitles(evas))}
                        <th>Prom. Par.</th>
                        <th>Semestrales</th>
                        <th>Final</th>
                    </tr>
                </thead>
                <tbody>
                    {boletaGuiConverter(
                        boletaParser(rows,boleta.num,evas,averageNum,() => {}),
                        boletaParser(rows,boleta.bol,evas,averageBol,boletaBolMid)
                    )}

                </tbody>
            </Table>
    </section>

}

function boletaBolMid(row){

    let transCal = []
    row.calificaciones.forEach(cal => transCal.push(transBolCalif(cal)))

    row.calificaciones = transCal
    row.parAverage = transBolCalif(row.parAverage)
    row.finAverage = transBolCalif(row.finAverage)

}

function transBolCalif(cal){
    if(cal === 0)
        return "NA"
    else if (cal === 1)
        return "A"
    else 
        return ""
}


function averageNum (array){
    if(array.every(e => e === "" || e === null))
        return""
    else{
        let total = 0;
        for(var i = 0; i < array.length; i++) 
            total += Number(array[i]);

        var prom = total / array.length;

        if(Number.isNaN(prom ))
            return ""
        else
            return (prom).toFixed(2)
    }
}

function averageBol (array){
    let prom = 1
    array.forEach(e => prom = e*prom);



    return prom
}

function getFaltasTitles(evas){
    let faltasString = []

    evas.forEach(() => faltasString.push("Faltas"))

    return faltasString
}

function getParCells(calificaciones, faltas){

    let evasCells = []
    for(let i = 0; i < calificaciones.length; i++){
        let calificacion = calificaciones[i]
        let falta = faltas[i]
        evasCells.push(<th>{calificacion}</th>)
        evasCells.push(<th>{falta}</th>)

    }

    return evasCells;
}

function getBoletaPetition(endPoint){
    return axios.get(serverUrl + endPoint,apiHeader())
}

export default Boleta