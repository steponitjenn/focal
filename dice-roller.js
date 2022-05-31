const rolls = parseInt(process.argv.slice(2)); //access number argument from command line
const diceRoller = function(count) {
  let rollResult = [];
  for (let i = 0; i < count; i++) {
    rollResult.push(Math.floor(Math.random() * (7 - 1) + 1));
  } 
  console.log(`Rolled ${count} dice: ${rollResult.join(", ")}`);
}
diceRoller(rolls)