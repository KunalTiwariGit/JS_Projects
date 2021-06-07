// let friends = ["Rohan", "Sohan", "Rakesh", "Manoj", "Ajay"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello " + friends[index] + ", this is a traditional way for iterating 'FOR LOOPS'.");
// }
// friends.forEach(function f(element){
//     console.log("Hello " + element + ", this ia a modern way for iterating 'FOR LOOPS' using 'FOR EACH LOOP'.");
// })
// for (element of friends) {
//     console.log("Hello " + element + ", this ia another modern way for iterating 'FOR LOOPS' using 'FOR OF LOOP'.");  
// }
// Loop for iterating objects in Javascript
// if data is in objects the we can use FOR IN LOOP
// let employee = {
//     name : "Rohan.",
//     age : 25+ " years old.",
//     salary : "Rs."+50000
// }
// for (key in employee) {
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }

// While & Do-While Loops In JS
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

 let j = 34;
do {
    console.log(`${j} is not less than 10.`)
} while (j<10);

let k = 5;
while (k < 10) {
    console.log(`${k} is less than 10.`);
    k++;
}