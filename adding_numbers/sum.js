const args = process.argv.slice(2);
//access number arguments from input
let array = args;
//put arguments into an array
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += parseInt(array[i]);
}
//loop to add arguments together
console.log(sum);


// const args = process.argv.slice(2);
// //access number arguments from input
// let sum = 0;
// for (let item of args) {
//   //loop over arguments
//   let convertedNum = parseInt(item);
//   //convert input from strings to integers
//   sum += convertedNum;
// }
// //loop to add arguments together
// console.log(sum);