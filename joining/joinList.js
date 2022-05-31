/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = function(conceptList) {
  let words = ""
  for (let index = 0; index <conceptList.length; index++) {
    let currentWord = conceptList[index];
//    console.log("This is all my ", words);
  //  console.log("This is my ", currentWord);
  //  console.log("This is my combined", words + ", " + currentWord)
  if(index === 0) {
    words = currentWord;
  } else {
  words = words + ", " + currentWord;
  }
  }
  return words;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
