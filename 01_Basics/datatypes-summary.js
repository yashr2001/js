// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue=100.3

const isLiggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789123456789n


// Reference (Non primitive)

// Array, Object, Function

const heros = ["ShreeGanesh", "ShreeRam", "ShreeHanuman"]

let myObj = {
    name:"yash",
    age:23,

}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myObj);