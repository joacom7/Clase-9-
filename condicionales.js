
/**
 * crear el numero 10
 * crear el numero 20
 * 
 * comparar si el numberOne es mayor que el numberTwo
 * 
 * si son iguales mostrar por consola - iguales
 * si es mayor retornar por consola - verdadero
 * si no es mayor retornar por consola - falso
 * 
 * end
 */
 const numberOne = 10
 const numberTwo = 20

 19 == '19' //true
 19 === '19' //false


if (numberOne === numberTwo)
{
    console.log("Equal")
}else if (numberOne > numberTwo)
{
    console.log("")
}else
{
    console.log("false")
}


numberOne > numberTwo ? console.log("Es mayor") : console.log("Es menor")


//let user = DB.getUser ();
/*harcodeado*/ let user = 'Pablo'
if(user){
    console.log('El usuario existe')
}else{
    console.log('El usuario no existe')
}


//ES6 Sugar sintax ifelse
numberOne ? console.log('El numberOne existe') : console.log('NumberOne no existe')


//OPERADORES
//Asignacion
let num1 = 10
let num2 = 100
let num3 = '20'
//Comparativos
//Mayor
num1 > num2
//Menor
num1 < num2
//Mayor o igual >=
num1 >= num2
//Menor o igual <=
num1<= num2
//Igualdad
num1 == num2
//Desigualdad o distinto
num1 != num2
//Igualdad estricta: === (Evalua el tipo de dato)
num1 === num2
//Desgualdad estricta: !== (Evalua el tipo de dato)
num1 !== num2

//Operadores Aritmeticos
//Suma: +
let total = num1 + num2 // 110
let total2 = num1 + num3 // '1020'
//Resta
total = num1 - num2 // -90
//Multiplicacion
total = num1 * num2 //1000
//Division
total = num2 / num1 //10
// Resto o modulo
10 | 4 //2
//Operador de inversion/negacion
let us = null
if(!us){
    console.log('Usuario no encontrado')
}
//Ej 2
if(!(num1 > num2)){
    console.log('Numero 1 no es mayor al numero 2')
}

//De incremento o decremento
total ++
total -- 