console.log('flor')

// Ejercicios reduce
// 1
// Tenemos un array llamado numbers con números enteros al azar.

// Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
// Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
// const numbers = [6, 1, 34, 94, 3, 17];

// // codea debajo de este comentario la solucion al ejercicio

let numeros = [1,4,5,8,13,19,35]
const numbers = [6, 1, 34, 94, 3, 17];

let suma = numeros.reduce((acc, item) => {
    return acc + item
})

let suma2 = numbers.reduce((acc, item) => {
    return acc + item
})

console.log(suma)
console.log(suma2)

// // deberia mostrar 155



// 2
// Tenemos un array llamado numbers con números enteros al azar.
// Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
// const numbers = [6, 1, 34, 94, 3, 17];

// // codea debajo de este comentario la solucion al ejercicio

// // deberia mostrar 977976


const enteros = [6, 1, 34, 94, 3, 17];

let multiplicacion = enteros.reduce((acc, item) => {
    return acc * item
})

console.log(multiplicacion)





// 3
// Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas, o dividiendo cada nota por la cantidad total y luego sumando los resultados).
// Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
// const notasDeTPs = [4, 7, 8, 5, 10];

// // codea debajo de este comentario la solucion al ejercicio

// // deberia mostrar 6.8


const notasDeTPs = [4, 7, 8, 5, 10];


let promedio = notasDeTPs.reduce((acc, item, array) => {
    return (acc * item)/array

})

console.log(promedio)