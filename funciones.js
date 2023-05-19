/* const x = 1
const y = 1


function sum(x, y){
    return x + y
}

function difference(x, y){
    return x - y
}


function multiplication(x, y){
    return x * y
}


function division(x, y){
    if(y == 0){
        
    }
    return x / y
}


sum(x, y)
difference(x, y)
multiplication(x, y)
division(x, y) */


//Repaso
let x = 15
let y = 20

function suma (x, y){
    let total = x + y
    console.log(total)
}

function Resta (x, y){
    let total = x - y
    console.log(total)
}

function multiplication (x, y){
    let total = x * y
    console.log(total)
}

function division (x, y){
    if (y == 0){
    //throw new Error ('no se puede dividir por 0')
    console.log('no se puede dividir por 0')
    }
    return x / y
}
function modulo(x,y){
    let total = x | y
}

console.log(suma(9 , 3))
console.log(Resta(9 , 3))
console.log(multiplication(9 , 3))
console.log(division(9 , 3))