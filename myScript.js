

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
const del = document.getElementById("del");

let runningTotal = ""
let numTotal = ""
let currentNum = ""
let prevNum = ""
let opState = ""
let sumTotal = ""
let displayTotal =""




// Event listener attached to each of the number buttons
numberButtons.forEach((number) => {
  number.addEventListener("click", ()=>{
    runningTotal += number.textContent
    currentNum = runningTotal;
    result(prevNum, currentNum)
    // Displays the inputs from user
    displayTotal += number.textContent
    showDisplay()
  })
});

// Event listener attached to each of the op buttons
opButtons.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    opState = operator.innerHTML
    prevNum = currentNum
    runningTotal = ""
    result(prevNum, currentNum)

    // Displays the input from user
    displayTotal += operator.textContent
    showDisplay()
  })
})

// Event listener for the ac button - 
ac.addEventListener("click", ()=>{
  currentNum = ""
  prevNum = ""
  runningTotal = ""
  displayTotal = ""
  showDisplay();
})


//This takes the digit and displays it to the calc screen
function showDisplay() {
  total.innerHTML = displayTotal
};


// Adds event for the equals key
op.addEventListener("click", ()=>{
  displayTotal = currentNum
  showDisplay()
})

// Adds event for del key
del.addEventListener("click", ()=>{
  console.log("hitting del");
  runningTotal = runningTotal.slice(0, -1);
  currentNum = runningTotal;
  displayTotal = displayTotal.slice(0, -1)
  total.innerHTML = displayTotal;

})


function removeDigit(string){
  newString = string.slice(0, -1);
  return newString
}

  
// basic function to complete a sum
function result(num1, num2){
  // changes the string form into int
  if(num1 != "" && num2 != ""){
    newNum1 = parseFloat(num1);
    newNum2 = parseFloat(num2);

    switch(opState){
      case "+":
        console.log("This is +");
        currentNum = cal.add(newNum1, newNum2);
        break;
      
        case "-":
          console.log("This is -");
          currentNum = cal.sub(newNum1, newNum2);
          break;

        case "*":
          console.log("This is *");
          currentNum = cal.mul(newNum1, newNum2);
          break;

        case "/":
          console.log("This is /");
          currentNum = cal.div(newNum1, newNum2);
          break;
    }
    return currentNum
  }

}
















