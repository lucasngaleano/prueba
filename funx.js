function cargarComboPropiedad() {
    let optionPropiedad = `<option selected disabled>...</option>`;
    for (let propiedad of datosPropiedas) {
        optionPropiedad += `<option id='${propiedad.tipo}'> ${propiedad.tipo} </option>`;
    }
    selectProp.innerHTML = optionPropiedad;
}

function cargarComboUbicacion() {
    let optionUbicacion = `<option selected disabled>...</option>`;
    for (let ubicacion of datosUbicacion) {
        optionUbicacion += `<option type = 'text' id='${ubicacion.ubi}'> ${ubicacion.ubi} </option>`;
    }
    selectUbi.innerHTML = optionUbicacion;
}

function asignarValores (valorDeSel) {
        let fmvalor
        for (let valProp = 0; valProp < datosPropiedas.length; valProp++) {
            if (datosPropiedas[valProp].tipo === valorDeSel) {
                fmvalor = datosPropiedas[valProp].factor;  
            }
        }

        for (let valUbi = 0; valUbi < datosUbicacion.length; valUbi++) {
            if (datosUbicacion[valUbi].ubi === valorDeSel) {
                fmvalor = datosUbicacion[valUbi].factor;
            } 
        }
        
        return fmvalor; 
}

function validar() {

    let fieldTotalM2 = document.getElementById('metros2');

    valorSelProp = selectProp.value;

    fmPropiedad = asignarValores(valorSelProp);

    valorSelUbi = selectUbi.value;
    
    fmUbicacion = asignarValores(valorSelUbi);

    totalM2 = Number(fieldTotalM2.value);

    if (fmPropiedad && fmUbicacion && (totalM2 > 0)) { //validacion de la solucion
        let totalPoliza = fmPropiedad * fmUbicacion * totalM2 * costoBase;
         let valpol = document.getElementById('valorPoliza')
         valpol.textContent = `El monto de la poliza es de $${totalPoliza.toFixed(2)}`;
    } else {
        let valpol = document.getElementById('valorPoliza')
         valpol.textContent = `los datos ingresados no son validos`;
    }
}

