// ARREGLOS
// TIPO DE DATO NO PRIMITIVO

const nombres1 = [
    "Mike", 
    "Sam",
    15,
    null,
    true
]

console.log(nombres1)

//                  0       1       2       3
const teachers = ["Mike", "Sam", "Víctor", "Ponz"]

console.log(teachers[0])

// MANIPULACIÓN
// A1. AGREGAR ELEMENTOS AL FINAL

teachers.push("Dylan")

console.log("Teachers después del push:", teachers)

// A2. AGREGAR ELEMENTOS AL INICIO 
teachers.unshift("Primer teacher")

console.log("Teachers después el unshift", teachers)

// B. ELIMINAR ELEMENTOS 
// splice
// 2 argumentos (0, cuántos borrar hacia adelante)

teachers.splice(0,1)
console.log(teachers)

//ELIMINAR EL PRIMER ELEMENTO 
teachers.shift()
console.log("Teachers después del shift", teachers)

//ELIMINAR EL ÚLTIMO ELEMENTO 
teachers.pop() 
console.log("Teachers despuúes del pop", teachers)




//CICLOS 
//FOR

const paises = ["México", "Colombia", "Perú"]

for (i = 0; i < paises.length; i++) {
    console.log(`País: ${i}`)
    console.log(`Nombre de país: ${paises[i]}`)
}

// FOR EACH
// CICLO QUE SE ULTILIZA COMÚNMENTE DENTRO DE LOS ARREGLOS.

paises.forEach(function(element){
    console.log(element)
})

//SPLIT
// MÉTODO QUE PERMITE CREAR UN ARREGLO A PARTIR DE LOS ARREGLOS QUE VAYA ENCONTRANDO 
const frase = "Esta es una frase larga"
const palabras = frase.split(" ")
const palabras2 = frase.split("f")

console.log(palabras)
console.log(palabras2)