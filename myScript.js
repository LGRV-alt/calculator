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

const total = document.getElementById("total");
const op = document.getElementById("op");

// Capturing all the buttons and attaching event listener to each
document.querySelectorAll('button').forEach(e =>{
  e.addEventListener("click", ()=> {
    console.log(e)
    digit_pressed(e.textContent);
    showNumber(e.textContent);
  });
});

// This is just to show what button is being pressed 
function digit_pressed(digit) {
  console.log("digit pressed" + digit);
}

//This takes the digit and displays it to the calc screen
function showNumber(digit) {
  numTotal += digit
  total.innerHTML = numTotal
  console.log(numTotal)
};


let numTotal = "";

// Adds event for the equals key
op.addEventListener("click", ()=>{
  console.log("i hit this");
  console.log(Number(numTotal));
  console.log(numTotal.split(/([-+*\/])/g));

})







