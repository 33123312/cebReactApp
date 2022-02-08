import React from "react";


export default function(row1,row2){
    let fullRows = []

    fullRows.push(...row1)
    fullRows.push(...row2)

    sort()

    let guiRows = []

    fullRows.forEach(e => guiRows.push(getRowGui(e)))

    return guiRows

    function getRowGui(row){
        return <tr>
                    <th>{row.materia}</th>
                    {getParCells(row.calificaciones,row.faltas)}
                    <td>{row.parAverage}</td>
                    <td>{row.cal_sem}</td>
                    <td>{row.finAverage}</td>
                </tr>
    }
    
    function getParCells(calificaciones, faltas){
    
        let evasCells = []
        for(let i = 0; i < calificaciones.length; i++){
            let calificacion = calificaciones[i]
            let falta = faltas[i]
            evasCells.push(<td>{calificacion}</td>)
            evasCells.push(<td>{falta}</td>)
    
        }
    
        return evasCells;
    }

    function sort (){
        fullRows.sort(function(a, b) {
            let keyA = a.orden,
              keyB =  b.orden;
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
    }

}