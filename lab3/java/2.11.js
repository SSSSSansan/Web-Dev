//1
alert(null || 2 || undefined);
//2
alert(alert(1) || 2 || alert(3));
//3
alert(1 && null && 2);
//4
alert(alert(1) && alert(2));
//5
alert(null || (2 && 3) || 4);
//6
//if (age >= 14 && age <= 90)
//7
//if (!(age >= 14 && age <= 90))
//8
if (-1 || 0) alert("first"); //true
if (-1 && 0) alert("second"); //false
if (null || (-1 && 1)) alert("third"); //true
//9
let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
