let frutas = [ "Manzana", "Banana", "Pera"]
console.log(frutas [0])


//Metodo Push (Agrega un elemento)
frutas.push("Naranja")
console.log(frutas.length)

//Metodo Pop (Elimina un elemento)
frutas.pop ('Naranja') // Si no pongo nada dentro de los parentesis saca el ultimo
console.log(frutas)


const encontroFruta = frutas.filter(function (fruta){
    if(fruta === 'Banana'){
        return fruta
    }
})

console.log(encontroFruta)

let edades = [13, 14 , 15, 16 , 18 , 25]

let mayorEdad = edades.filter(function(mayor){
    if(mayor >= 18){
        return mayor
    }
    
})

console.log(mayorEdad)