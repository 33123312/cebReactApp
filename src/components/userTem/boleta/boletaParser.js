
let parser = (rows,boleta,evas,average,midle) =>{
    let convertedRows = getRowsObj();

    convertedRows.forEach(midle)

    return convertedRows
    
    function getRowsObj(){
        let rowsToPrint = []
        rows.forEach(row =>{

            if(!row.isBuilt){
                buildRow(row)
                if(row.isBuilt)
                rowsToPrint.push(row)
            }
        })
    
        return rowsToPrint;
    }

    function buildRow(rowObj){
        let mat = rowObj.materia;
        let rowData = boleta.filter(e => e.nombre_abr === mat)


        if (rowData.length > 0){
            rowObj.calificaciones =  getInLineValues("calificacion",rowData)
            rowObj.faltas = getInLineValues("faltas",rowData)
            rowObj.parAverage = average(rowObj.calificaciones)
            rowObj.finAverage = average([rowObj.parAverage,rowObj.cal_sem])
            rowObj.isBuilt = true
        }

    }   

    function getInLineValues(prop, values){
        let calificaciones = []
    
        evas.forEach(eva => {
            let califa = "";
            values.forEach(row => {
                if (row.evaluacion === eva)
                    califa = row[prop]
            })
    
            calificaciones.push(califa)
    
        })
    
        return calificaciones;
    
    }
    

}


export default parser;