//1
//no difference
//2
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
//3
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//4
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}
