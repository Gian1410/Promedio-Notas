const inputNombre = document.querySelector('#nombre-curso').value;
const inputNombreAlumno = document.querySelector('#nombre-alumno').value;

const divNotas = document.querySelector('.registro-notas')

const agregarNota = document.querySelector('#addNota')
const promediar = document.querySelector('#promediar')

const formNotas = document.querySelector('.formulario')

let notasArreglo = [];

let promedio = 0;
let cantidadNotas = 0;

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

function crearPromedioDiv(notasResultado,cantidadNotas){
    const sumaNotas = notasResultado.reduce((promedio,nota)=>{
         return parseInt((promedio+nota))
    })
    const promedioNotas = sumaNotas/cantidadNotas

    const divPromedio = document.createElement("DIV");
    divPromedio.classList.add('promedio-total');
    //divPromedio.textContent = promedioNotas;
    divPromedio.innerHTML = `Tu promedio es ${promedioNotas}`;
    formNotas.appendChild(divPromedio);
}

function verificarDatos(nombre,curso){
    if (nombre === ' ' && curso === ' ') {
        alertaErrorDiv('Campos Vacios');
    }
}

agregarNota.addEventListener('click', (e) => {
    e.preventDefault();
    agregarDivNota();
})

document.addEventListener('keydown', (e) => {
    //accion con enter
    if (e.key === 'Enter') {
        e.preventDefault();
        verificarDatos(inputNombre,inputNombreAlumno);
        const nota = document.querySelectorAll('.nota');
        const nodos = Array.from(nota);


        const nuevoArregloNotas = nodos.map((element)=>{
            return parseInt(element.value)
        })

        cantidadNotas = nuevoArregloNotas.length;

        crearPromedioDiv(nuevoArregloNotas,cantidadNotas);

        console.log(nuevoArregloNotas);
    }
})
promediar.addEventListener('click', (e) => {
    //accion con click
    e.preventDefault();
    verificarDatos(inputNombre,inputNombreAlumno);
    const nota = document.querySelectorAll('.nota');
    const nodos = Array.from(nota);


    const nuevoArregloNotas = nodos.map((element)=>{
        return parseInt(element.value)
    })

    cantidadNotas = nuevoArregloNotas.length;

    crearPromedioDiv(nuevoArregloNotas,cantidadNotas);

    console.log(nuevoArregloNotas);
})
