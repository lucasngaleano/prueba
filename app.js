const costoBase = 1.16;

let selectProp = document.getElementById('propiedad');

let selectUbi = document.getElementById('ubicacion');

let fmPropiedad = 0;

let fmUbicacion;

let totalM2 = 0;

cargarComboPropiedad();

cargarComboUbicacion();
 
let botonCotizar = document.querySelector('button');

botonCotizar.addEventListener('click', validar);


