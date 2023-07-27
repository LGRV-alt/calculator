

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

//Linking vars to the buttons displayed on html
const total = document.getElementById("total");
const calEqual = document.getElementById("op")
const numberButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const ac = document.getElementById("ac");

let runningTotal = ""
let numTotal = "";
let currentNum = ""
let prevNum = ""
let opState = "/"
let sumTotal = ""


// Event listener attached to each of the number buttons
numberButtons.forEach((number) => {
  number.addEventListener("click", ()=>{
    showNumber(number.textContent)
    runningTotal += number.innerHTML
    currentNum = runningTotal;
    console.log(runningTotal)
    result(prevNum, currentNum)
  })
});

// Event listener attached to each of the op buttons
opButtons.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    showNumber(operator.textContent)
    opState = operator.innerHTML
    prevNum = currentNum
    runningTotal = ""
  })
})

// Event listener for the ac button - 
ac.addEventListener("click", ()=>{
  sumTotal = "";
  currentNum = ""
  prevNum = ""
  runningTotal = ""
  numTotal = 
  total.innerHTML = sumTotal
})







// This is just to show what button is being pressed 
function digit_pressed(digit) {
  console.log("digit pressed" + digit);
}

//This takes the digit and displays it to the calc screen
function showNumber(digit) {
  numTotal += digit
  total.innerHTML = numTotal
};




// Adds event for the equals key
op.addEventListener("click", ()=>{
  console.log(sumTotal)
  total.innerHTML = sumTotal
})



  
// basic function to complete a sum
function result(num1, num2){
  // find 
  if(num1 != "" && num2 != ""){
    newNum1 = parseFloat(num1);
    newNum2 = parseFloat(num2);
    sumTotal = cal.add(newNum1, newNum2);
    return sumTotal;
    
  }

}













