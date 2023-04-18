//Escriba un programa que calcule la probabilidad de sacar todos los dados 6
//siendo que tiramos N dados (dato ingresado por el usuario)


import * as rls from "readline-sync";
let daDos = rls.questionInt ("Ingrese cantidad de dados: ");
let result = 0;
let casosPosibles = Math.pow (6, daDos);
let casosFavorables = 1;
result = casosFavorables / casosPosibles;
console.log (result);
