/*
 * Modify the contents of the function below, such that:
 *
 * not hungry, tell ourselves to get back to work.
 * hungry + < 20 mins, pick something up and eat it in the lab
 * hungry + 20-30 mins, try a place nearby
 * hungry + > 30 mins, remind ourselves we're in a bootcamp and we
 * should reconsider how much time we actually have to spare.
 *
 * hungry = true or false
 * availableTime = Number in minutes
 */

const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry && availableTime < 20) {
    console.log("Pick something up and eat it in the lab!");
  } else if (hungry && availableTime >= 20 && availableTime <= 30) {
    console.log("Try a place nearby!");
  } else if (hungry && availableTime > 30) {
    console.log("You're in a bootcamp. Do you really have that time to spare?");
  } else {
    console.log("Get back to work.");
  }
};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
