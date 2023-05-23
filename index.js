      // Ejemplo de concatenación de cadenas de texto
    var names = "John";
    var age = 30;
    var message = "Mi nombre es " + names + " y tengo " + age + " años.";
    document.getElementById("concatenation").innerHTML = message;
    
        // Ejemplo de Template String
    var templateMessage = `Mi nombre es ${names} y tengo ${age} años.`;
    document.getElementById("template").innerHTML = templateMessage;

// Variables Numeros

var numeroA = 10;
var numeroB = 15;
var suma = numeroA + numeroB;

// Uso de console .log

// console.log (suma)

// Variables Texto

var text1 = 'Brenda';
var text2 = 'te';
var text3 = 'Amo';

// Uso de console .log

// console.log (text1+ " " + text2 + " " + text3)

// ejemplo template strings

// console.log('Brenda' + " " + text2 + " " + text3)
// console.log(`Brenda ${text2} ${text3}`)

// Podemos reasignar valores a las variables

var nombre = 'brenda';
// console.log(nombre);
nombre = 'luciano';
// console.log(nombre);

// VAR LET CONST

var tipoVar ='soy una variable var'
var tipoVar ='soy una variable var con otro valor'

// console.log(tipoVar)

let tipoLet ='soy una variable let'

// console.log(tipoLet)

tipoLet = 'soy let con otro valor'

// console.log(tipoLet)

const tipoConst = 'soy un const'

// console.log(tipoConst)


// como saber que tipo de datos estamos manejando 

// console.log(typeof 5)
// console.log(typeof '5')

// Prompt nos da la posibilidad de ingresar algo

// let dato = prompt('hola como te llamas')
// console.log(dato)   

// Ejemplos Scope

// Son globales

var a = 'Estoy global';

console.log(a)

// Solo viven dentro de la funcion

function holi(){
    var b = 'estoy en una funcion';
}

{
var c = 'estoy en un bloque'
}

// LET y CONST viven solo en su bloque

{
    let d = 'estoy en un bloque';
}

{
    const e = 'estoy en un bloque';
}

    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(e);


    // Condicionales

    // Sintaxis

    // If (condicion) {
    //     codigo a ejecutar si se cumple la condicion osea si es true
    //     console.log()
    // }

    // si la condicion es falsa y quiero que haga algo

    // if (condicion) {
    //     Si es verdadera hace esto
    //     console.log;
    // } else {
    //     ejecuta esto
    // }

    // ejemplo de if

    // let llueve = true;

    // if (llueve) {
    //     console.log('Esta lloviendo lleva paragua');
    // } else 
    // {
    //     console.log('No llueve, sali tranquilo');
    // }

    // Podemos comprobar si es true usando solo llueve, JS asume que es true y si lo queremos negar le decimos !llueve


// let edad = 18;
// let nombredogo ='nicolas'

// if (edad > 18) {
//     console.log ('entrar');
// } else {
//     console.log('no puede entrar')
// }

let edad = prompt()
let nombredogo = prompt()

if (edad > 18 && nombredogo == 'nicolas') {
    alert('sos alto puto');
} else {
    alert('proba con una edad mayor a 17 y como nombre nicolas en minusculas')
}




