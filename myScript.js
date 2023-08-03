

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
const decimal = document.getElementById("decimal");

let runningTotal = "Stan is a knob"
let numTotal = ""
let currentNum = ""
let prevNum = ""
let opState = ""
let sumTotal = ""
let displayTotal =""

// Keydown events

// Takes keydown input for numbers and applies them to the display
document.addEventListener("keydown", (event)=>{
  let regex = /\d/;
  number = regex.test(event.key);

  if(number == true){
    keyNum(event.key);
  } else if(event.key =="."){
    keyNum(event.key);
    checkDecimal();
  }
})


// Takes a string and displays it onto the calc screen
function keyNum(number){
  runningTotal += number;
  currentNum = runningTotal;
  result(prevNum, currentNum);

  displayTotal += number;
  showDisplay();

}

//Event listener attached for the operators
document.addEventListener("keydown", (event)=>{
  console.log(event);

  switch(event.key){
    case "+":
      keyOp("+")
      break;
    
    case "-":
      keyOp("-");
      break;

    case "/":
      keyOp("/");
      break;
    
    case "*":
      keyOp("*");
      break;

    case "Enter":
      displayTotal = currentNum
      showDisplay();
      break;
    
    case "Backspace":
      calcDel();
      break;

    case "Delete":
      clearCache();
      showDisplay();
  }

})

function keyOp(operator){
  opState = operator;
  prevNum = currentNum;
  runningTotal = ""
  result(prevNum, currentNum);
  displayTotal += operator;
  showDisplay();
}


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


// Doesnt allow the user to enter two decimals on one number
decimal.addEventListener("click", ()=>{
  checkDecimal()
})

function checkDecimal(){
  if(runningTotal.substring(1, 2) && (runningTotal.substring(3,4) === ".")){
    console.log("please only enter one decimal place")
    runningTotal = runningTotal.slice(0, -1);
    currentNum = runningTotal;
    displayTotal = displayTotal.slice(0, -1)
    total.innerHTML = displayTotal;
}};


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
  clearCache();
  showDisplay();
})

function clearCache(){
  currentNum = ""
  prevNum = ""
  runningTotal = ""
  displayTotal = ""
}


//This takes the digit and displays it to the calc screen
function showDisplay() {
  total.innerHTML = displayTotal
};


// Adds event for the equals key
op.addEventListener("click", ()=>{
  displayTotal = currentNum
  showDisplay()
})

// Adds event if the display is empty and the equals key is pressed
op.addEventListener("click", ()=>{
  if(displayTotal ===""){
    displayTotal = "ENTER NUMBER"
    showDisplay();
    displayTotal = ""
  } else if(displayTotal === Infinity){
    displayTotal = "NICE TRY";
    showDisplay()
    displayTotal = ""
  }
})

// Adds event for del key
del.addEventListener("click", ()=>{
  calcDel();
});


function calcDel(){
  runningTotal = runningTotal.slice(0, -1);
  currentNum = runningTotal;
  displayTotal = displayTotal.slice(0, -1)
  total.innerHTML = displayTotal;
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
















