"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var daDos = rls.questionInt("Ingrese cantidad de dados: ");
var result = 0;
var casosPosibles = Math.pow(6, daDos);
var casosFavorables = 1;
result = casosFavorables / casosPosibles;
console.log(result);
