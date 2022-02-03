"use strict";
const addNumber = (a, b) => a + b;
const nombr = (a) => a;
let funcionTipo;
funcionTipo = addNumber;
console.log(funcionTipo(1, 3));
funcionTipo = nombr;
console.log(funcionTipo('Nombre'));
console.log(funcionTipo(3, 3));
let soloFuncionString;
//! Esta linea no se puede por que se definio que la variable solo acepte funciones que regresen texto y con 1 parametro
//!soloFuncionString = addNumber
soloFuncionString = nombr;
