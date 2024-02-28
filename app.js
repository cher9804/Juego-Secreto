// let titulo = document.querySelector('h1');

// titulo.innerHTML = "Juego del numero secreto";

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = "Indique un numero del 1 al 10"






// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10
// // console.log(numeroSecreto);

// function asignarTextoElemento( elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return; 
// };

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//     // console.log(typeof(numeroDeUsuario)); 
//     // console.log(numeroSecreto);
//     // console.log(typeof(numeroSecreto));
//     // console.log(numeroDeUsuario);
//     // console.log(numeroDeUsuario === numeroSecreto);
//     console.log(intentos)
//     if (numeroDeUsuario === numeroSecreto) {
//         asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
//         document.getElementById("reiniciar").removeAttribute("disabled")
//     } else {
//         //El usuario no acerto
//         if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento(`p`,`El numero secreto es menor`)
//         } else {
//             asignarTextoElemento(`p`,`El numero secreto es mayor`)
//         }
//         intentos++
//         limpiarCaja();
//     };
//     // console.log(numeroDeUsuario == numeroSecreto ? alert("Adivinaste el numero") : alert("No acertaste, trata de nuevo")) ---> Yo hice el intento
//     return;
// };


// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = ""
//     //  let valorCaja = document.querySelector('#valorUsuario');
//     // valorCaja.value = "";
// };


// function generalNumeroSecreto() {
//     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     // Si ya sorteamos todos los numeros

//     if(listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento(`p`,"Ya se sortearon todos los numeros posibles");
//     } else { 

//         // Si el numero generado esta incluido en la listas

//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generalNumeroSecreto();
//         }else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// };


// function condicionesIniciales () {
//     asignarTextoElemento('h1',"Juego del numero secreto X2");
//     asignarTextoElemento('p',`Indique un numero de 1 al ${numeroMaximo}`);
//     numeroSecreto = generalNumeroSecreto()
//     intentos = 1;
// };


// function reiniciarJuego() {
//     // Limpiar caja
//     limpiarCaja();
//     // indicar mensaje de intervalo de numero
//     // generar numero aleatorio
//     // inicializar el numero de intentos
//     condicionesIniciales();
//     // Desabilitar el boton de nuevo juego
//     document.querySelector('#reiniciar').setAttribute("disabled","true")
// };

// condicionesIniciales(); 





// // // // // // // // // Esto es una muestra de como es que trabaja una funcion

// function numero (numero) {

//     if (numero > 0) {
//         alert("El numero es mayor que 0");
//     } else if (numero < 0) {
//         alert("El numero es menor que cero");
//     } else {
//         alert("El numero es cero");
//     }
// };

// let numeroUsuario = prompt("Dame un numero")
// numero (numeroUsuario)








// function hola(){
//     console.log("Hola Mundo");
//     return;
// };
// hola();



// function hola(nombre){
//     console.log(`Hola ${nombre}`);
//     return;
// };

// let nombreUsuario = prompt("Cual es tu nombre?");

// hola(nombreUsuario);


// function numero(numero){
//     console.log(numero * 2);
//     return;
// };

// let nombreUsuario = parseInt(prompt("Cual es tu numero?"));

// numero(nombreUsuario);


// function numero(a,b,c){
//     console.log((a+b+c)/3);
//     return;
// };

// let a = parseInt(prompt("Cual es tu numero a?"));
// let b = parseInt(prompt("Cual es tu numero b?"));
// let c = parseInt(prompt("Cual es tu numero? c"));

// numero(a,b,c);


// function numeroMayor(a,b) {
//     console.log(a > b ? `El numero mayor es ${a}` : `El numero mayor es ${b}`);
//     return;
// };

// let a = parseInt(prompt("Dame un numero a"));
// let b = parseInt(prompt("Dame un numero b"));

// // numeroMayor(a,b)


// function numeroMultiplicadoPorSiMismo(a) {
//     console.log( a * a);
//     return;
// };

// let numeroUsuario = parseInt(prompt("Dame un numero:"));

// numeroMultiplicadoPorSiMismo(numeroUsuario);








// function calcularImc(a , b) {
//     return (a/(b * b));
// };

// let peso = parseFloat(prompt("Cual es su peso en Kg?"));
// let altura = parseFloat(prompt("Cual es su altura en metros?"));

// console.log(peso);
// console.log(altura);

// console.log(`Su IMC es ${calcularImc(peso,altura)}`);


// // let numeroUsuario = parseInt(prompt("De que numero quieres sacar el factorial?"))

// // function factorialDeNumero(factorial) {
//     factorial = 100
//     while(factorial != 0){
//         contador = factorial;
//         resultado = 1
//         resultado = (factorial * (contador--)) * resultado;
//         factorial--
//     };
// // };

// // let resultadoFactorial = factorialDeNumero(numeroUsuario); 

// console.log(`El factorial de ${numeroUsuario} es ${resultadoFactorial}`);



// let monedaCambio = prompt("A que moneda deseas cambiar tu dinero?");
// let valorMoneda = parseFloat(prompt(`Cual es el valor de 1 ${monedaCambio} en su peso local`));
// let monedaPais = parseInt(prompt(`Cuantos pesos locales quieres cambiar a ${monedaCambio}?`));

// function cambioDeMoneda(a , b) {
//     return a * b;
// };

// console.log(`${monedaPais} pesos locales pasados a ${monedaCambio} son: ${cambioDeMoneda(monedaPais,valorMoneda)}`)





// function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     } else {
//       return numero * calcularFactorial(numero - 1);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 3;
//   let resultado = calcularFactorial(numero);
//   console.log(`El factorial de ${numero} es ${resultado}`);
  



// function salaRectangular(altura,anchura) {
//     let area = altura * anchura
//     let perimetro = (2*altura) + (2*anchura)
//     console.log(`El area de esta tabla es ${area}`);
//     console.log(`El perimetro de esta tabla es ${perimetro}`);
// };

// salaRectangular(10,5);



// function salaCircular(radio) {
//     pi = 3.14;
//     area = radio*radio*pi;
//     perimetro = pi * 2 * radio;
//     console.log(`El area de esta tabla es ${area}`);
//     console.log(`El perimetro de esta tabla es ${perimetro}`);
// };

// salaCircular(4);




// function calcularAreaYPerimetroCircular(radio) {
//     var pi = 3.14;
//     var area = pi * radio * radio;
//     var perimetro = 2 * pi * radio;
//     console.log("Área: " + area);
//     console.log("Perímetro: " + perimetro);
//   }
//   // Ejemplo de uso
//   let radio = 4; // en metros
//   calcularAreaYPerimetroCircular(radio);
  


// function convertirDolaresAReales(dolares) {
//     var cotizacionDolar = 4.80;
//     var reales = dolares * cotizacionDolar;
//     return reales;
//   }
//   // Ejemplo de uso
//   let valorEnDolar = 50;
//   let valorEnReales = convertirDolaresAReales(valorEnDolar);
//   console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
  

// let contador = 1;

// function tablasDeMultiplicar(numero) {
//     while (contador <= 10){
//         let resultado = numero * contador;
//         console.log(`${numero} x ${contador} = ${resultado}`);
//         contador++
//     };
// };

// let numero = parseInt(prompt("De que numero quieres la tabla de multiplicar?"));

// tablasDeMultiplicar(numero);


// let listaGenerica = [];
// console.log(listaGenerica)


// let lenguagesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python','Java', 'Ruby', 'GoLang'];
// console.log(lenguagesDeProgramacion);


// function mostrarLista(lista) {
//     let x = lista.length - 1;
//     while ( x >= 0 ) {
//         console.log(lista[x])
//         x--
//     };
// };
// mostrarLista(lenguagesDeProgramacion);





// function mostrarLenguagesSeparadamente() {
//     for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//       console.log(lenguagesDeProgramacion[i]);
//     }
//   }
  
//   mostrarLenguagesSeparadamente();




function promedioLista(lista){
    let suma = 0;
    for (let x = 0 ; x < lista.length; x++){
        suma += lista[x];
        console.log(suma);
    };
    return suma/lista.length
};

let listaNumeros = [5,5,10];
promedioLista(listaNumeros);
let media = promedioLista(listaNumeros); 
console.log("Media: " + media);


// function calcularMedia(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma / lista.length;
//   }
  
//   let numeros = [10, 20, 30, 40, 50];
//   let media = calcularMedia(numeros);
//   console.log('Média:', media);