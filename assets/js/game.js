/* window.prompt () creates the prompt field-
function asking the user to send some information back to the program.*/
/*we then added a var playerName to window.prompt () asking the program to remember the name input
by the user*/

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

// this is a strong concentration a string mixed with a 
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"
function fight() {
/* this alert function, within the fight function, 
    sends some information from  the program to the 
    user through the browser's window. */
    window.alert("The fight has begun!");
  }
// this calls on the function-it won't run without doing this
  // fight ();

 