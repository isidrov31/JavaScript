
// Array de Objetos

let seleccionFutbol = [
    {nombre: 'Argentina', mundiales: 3, estrella: 'Messi', continente: 'Sudamerica' , Jugoultimomundial: true},
    {nombre:'Brasil', mundiales:5 ,estrella: 'Pele' , continente: 'Sudamerica', Jugoultimomundial: true },
    {nombre:'Alemania', mundiales:4 ,estrella: 'Beckenbauer' , continente:'Europa',Jugoultimomundial: true },
    {nombre:'Italia', mundiales:4 ,estrella: 'Meazza' , continente:'Europa', Jugoultimomundial: false },
    {nombre:'Francia', mundiales:2 ,estrella: 'Zidane', continente:'Europa', Jugoultimomundial: true },
    {nombre:'España', mundiales:1 ,estrella:'Iniesta' , continente:'Europa', Jugoultimomundial: true },
    {nombre:'Inglaterra', mundiales:1 ,estrella:'Charlton' , continente:'Europa', Jugoultimomundial: true },
    {nombre:'Holanda', mundiales:0 ,estrella: 'Cruyff', continente:'Europa', Jugoultimomundial: true },
];

// Metodo Filter

let ganadoresMundial = seleccionFutbol.filter(seleccionFutbol => seleccionFutbol.mundiales > 0);

ganadoresMundial.forEach(seleccionFutbol => {
    if (seleccionFutbol.mundiales > 1) {
        console.log(`${seleccionFutbol.nombre} ganó ${seleccionFutbol.mundiales} Copas del Mundo`);
    } else if (seleccionFutbol.mundiales === 1){
        console.log(`${seleccionFutbol.nombre} ganó ${seleccionFutbol.mundiales} Copa del Mundo`)
    } 
});

let nuncaGano = seleccionFutbol.filter(seleccionFutbol => seleccionFutbol.mundiales === 0 );

nuncaGano.forEach(seleccionFutbol => {
    console.log(`${seleccionFutbol.nombre} nunca ganó un Mundial`)
});

// Metodo Reduce

const sumaMundialesPorContinente = seleccionFutbol.reduce((acc, seleccion) => {
    if (!acc.hasOwnProperty(seleccion.continente)) {
    acc[seleccion.continente] = 0;
    }
    acc[seleccion.continente] += seleccion.mundiales;
    return acc;
}, {});

for (const continente in sumaMundialesPorContinente){
    console.log(`El continente ${continente} gano ${sumaMundialesPorContinente[continente]}`)
}

// Metodo Includes

const elMejor = seleccionFutbol.filter((seleccion) => seleccion.estrella.includes('Messi'));
console.log(elMejor);

// Parametrizar

const mayoresA = (mundiales) =>
        seleccionFutbol.filter((seleccion) => seleccion.mundiales >= mundiales);

        console.log(mayoresA(4));

// Metodo Map

const estrella = seleccionFutbol.map(({estrella}) => estrella);
console.log(estrella)

const proximos100anios = seleccionFutbol.map((seleccion) => seleccion.mundiales >= 0
? {...seleccionFutbol, mundiales: seleccion.mundiales + 2}
:seleccion);

console.log(proximos100anios)

// Metodo some

const estrellas =() => {
    if (seleccionFutbol.some((jugador) => jugador.estrella.length === 1))
     {
    return "Hay dos estrellas en esta seleccion";}
    else {
        return "No hay selecciones con dos Estrellas" ;   }
};

console.log(estrellas());

// Metodo sort

const ordenarMundiales = seleccionFutbol.sort((a,b) => a.mundiales - b.mundiales);
console.log(ordenarMundiales)