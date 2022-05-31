const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let i = 0; i < cookie.length; i++) {
    let ingredients = cookie[i];
    if(ingredients === "🍇") {
      return "Raisin alert!";
    } 
  } 
  return "All good!";
};
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let alarms = [];
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let alarm = raisinAlarm(cookie);
    alarms.push(alarm);
  }
  return alarms;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

//Pairing assignment with @aneikusa