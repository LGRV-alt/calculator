num1 = 2
num2 = 5
operator ="+"

// console.log(cal.add(num1, num2))
// console.log(cal.sub(90,30))
// console.log(cal.div(5,2))


const cal = {
    add(a,b) {
      return a + b
    },
    sub(a,b) {
      return a -b
    },
    mul(a,b) {
      return a * b
    },
    div(a,b) {
      return a / b
    }
  };

function calc(){
 if (operator == "+"){
  return cal.add(num1, num2)
 }
 else if(operator == "-"){
  return cal.sub(num1, num2);
 }
 else if(operator == "*"){
  return cal.mul(num1, num2);
 }
 else if(operator == "/"){
  return cal.div(num1, num2);
 }
 else{
  return console.log("Please use either * / -")
 }
};

console.log(calc())