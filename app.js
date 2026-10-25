const inputNombre = document.querySelector('#nombre-curso').value;
const inputNombreAlumno = document.querySelector('#nombre-alumno').value;

const divNotas = document.querySelector('.registro-notas')

const agregarNota = document.querySelector('#addNota')
const promediar = document.querySelector('#promediar')

const formNotas = document.querySelector('.formulario')

let notasArreglo = [];


function agregarDivNota() {
    const divnota = document.createElement("INPUT");
    divnota.classList.add('nota');
    divnota.placeholder = "Nota"
    divNotas.appendChild(divnota);
}

function alertaErrorDiv(mensaje){
    const divError = document.createElement("DIV");
    divError.classList.add('alerta-error');
    const errorTexto = document.createElement('P');
    errorTexto.textContent = mensaje;
    divError.appendChild(errorTexto);
    formNotas.appendChild(divError);

    setTimeout(()=>{
        divError.remove();
    },2000)
}

function crearPromedioDiv(notasResultado){
    const divPromedio = document.createElement("DIV");
    divPromedio.classList.add('promedio-total');
    
}

function verificarDatos(nombre,curso){
    if (nombre == '' && curso == '') {
        alertaErrorDiv('Campos Vacios');
    }
}

agregarNota.addEventListener('click', (e) => {
    e.preventDefault();
    agregarDivNota();
})

promediar.addEventListener('click', (e) => {
    e.preventDefault();
    verificarDatos(inputNombre,inputNombreAlumno);
    const nota = document.querySelectorAll('.nota');
    const nodos = Array.from(nota);

    notasArreglo = [];

    const nuevoArregloNotas = nodos.map((element)=>{
        return parseInt(element.value)

    })

    console.log(nuevoArregloNotas);
})
