// const title = document.querySelector("h1")
// console.log(title)
// title.textContent += "Mundo!"

// var nombre = "Tatiana"
// function saludar() {
//     var nombre = "Nicolle"
//     console.log("Hola "+ nombre)
// }
// saludar()

// {
//     let nombre ="Tatiana"
// }
// console.log(nombre)

// for (let i=0; i<= 100; i++) {
//     console.log(i)
// }
// console.log (i)

//Argumentos y parametros rest

// function Suma (...numeros) {
//     const total = numeros.reduce((acc, curr) => acc + curr)
//     console.log(total)
// }

// Suma(120,232,33)

// function suma(name, ...prices) {
//     const total = prices.reduce((acc, curr) => { 
//         return acc + curr})
//     return name + total
// }


// const result = suma("Tati", 120,232,33)
// console.log(result)

// function soyUnClosure() {
//     const variableLocal = "Tati"
//     return function() {
//         return variableLocal.toUpperCase()
//     }
// }

// const closure= soyUnClosure();
// console.log(closure())

// function pedirPizza(UID){
//     let cantidadPizzas = 0
//     const pedido = `PEDIDO_${UID}`
//     return function (pizza) {
//         cantidadPizzas++
//         return `${pedido}_${pizza}_${cantidadPizzas}`
//     }
// }

// const pedidoUID = pedirPizza(232323)
// console.log(pedidoUID("hawaina"))
// console.log(pedidoUID("pollo"))

// (function (name) {
//     console.log("La casa " + name)
// })("azul")

// for(var i=0; i<10; i++) {
//     console.log(i);
//     (function(i) {
//     setTimeout(function(){
//         console.log('el numero es ' + i);
//     },1000)
//     })(i)
// }

// function soyCallback(cb) {
//     cb()
// }

// soyCallback(function(){
//     console.log("Hola")
// })

// soyCallback(saludar)


// function saludar(nombre) {
//     console.log("Hola " + nombre)
// }

// function obtenerNombre(fn) {
//     const nombre = prompt("Introduce tu nombre")
//     fn(nombre)
// }

// obtenerNombre(saludar)

//otro ejemplo de callback

// const nums = [1 ,2 ,3 ,4 ,5 ]

// function hacerDoble (numero) {
//     return numero *2
// } 

// const doble = nums.map(hacerDoble)

// console.log (doble)

//---otro ejemplo de callback

// const nums = [1, 2, 3, 4, 5, 6]

// const pares = nums.filter(num => num % 2 === 0)

// console.log(pares)
    // "use strict"

    // function saludar () {
    //     console.log (this)
    // }

    // saludar ()

    // var nombre = "Juan"
    // const persona = {nombre: "andres"}

    // function saludar () {
    //     console.log(this.nombre)
    // }

    // saludar.call(persona)

    // var nombre = "Tati"
    // const obj = {
    //     nombre: "Nico",
    //     saludar () {
    //         console.log(this.nombre)
    //     }
    // }
    // // obj.saludar()

    // const funcion = obj.saludar
    // funcion()

//     const API = "https://randomuser.me/api/?results=20"

// async function getData(){
//     const response = await fetch(API)
//     const {results:users} = await response.json()
//     showUsers(users)
// }

// function showUsers(users){
//     users.forEach(user => {
//         const picture = user.picture.medium
//         const img = document.createElement("img")
//         img.src = picture
//         document.body.appendChild(img)
//     })
// }

// getData()

const colores= ["rojo", "verde", "azul"]
console.log(colores)