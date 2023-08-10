
// Obj with basic functions for calculator
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


//Linking variables to the buttons displayed on html
const total = document.getElementById("total");
const calEqual = document.getElementById("op")
const numberButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const decimal = document.getElementById("decimal");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const error = document.getElementById("errorMessage");

// Empty variables used within the calculator
let runningTotal = ""
let numTotal = ""
let currentNum = ""
let prevNum = ""
let opState = ""
let sumTotal = ""
let displayTotal =""


//-------------------------- Functions ------------------------------------ 

// Takes an operator and applies it to the display and calculations 
function keyOp(operator){
  opState = operator;
  prevNum = currentNum;
  runningTotal = ""
  result(prevNum, currentNum);
  displayTotal += operator;
  
};

// function checkOp(){
//   if(opState !=""){
//    displayTotal = displayTotal.slice(1, 2);
//     showDisplay();
//   }
// }

// Modal Functions


// When the user clicks on the span (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
};

// When the user clicks outside of the modal, close the modal
window.onclick = function(event){
  console.log(event);
  if(event.target == modal){
    modal.style.display = "none";
  }

}


// This checks the user input if empty or /0
function popModal(){
  if(currentNum ==Infinity){
    modal.style.display = "block";
    error.innerHTML = "You cant divide by zero"
    clearCache();
    showDisplay();
  }else if(currentNum == ""){
    modal.style.display = "block";
    error.innerHTML = "You need to enter a number";
    clearCache();
    showDisplay();
  }else{
    displayTotal = currentNum;
    showDisplay();
  }
}




// Looks for a second decimal used and removes it e.g (5.3.4)
function checkDecimal(){
  if(runningTotal.substring(1, 2) && (runningTotal.substring(3,4) === ".")){
    console.log("please only enter one decimal place")
    runningTotal = runningTotal.slice(0, -1);
    currentNum = runningTotal;
    displayTotal = displayTotal.slice(0, -1)
    total.innerHTML = displayTotal;
}};

// Clears all the information stored and the display
function clearCache(){
  currentNum = ""
  prevNum = ""
  runningTotal = ""
  displayTotal = ""
};

//This takes the digit and displays it to the calc screen
function showDisplay() {
  total.innerHTML = displayTotal
};

// Removes the last entered digit 
function calcDel(){
  runningTotal = runningTotal.slice(0, -1);
  currentNum = runningTotal;
  displayTotal = displayTotal.slice(0, -1)
  total.innerHTML = displayTotal;
};


// Takes a string and displays it onto the calc screen
function keyNum(number){
  runningTotal += number;
  currentNum = runningTotal;
  result(prevNum, currentNum);
  displayTotal += number;
};

// Function to complete a sum
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
          currentNum = cal.div(newNum1, newNum2);
          break;
    }
    return currentNum
  }
};

  

//-------------------------Keydown events-------------------------------------

// Takes keydown input for numbers and applies them to the display
document.addEventListener("keydown", (event)=>{
  // Any key with a key of a number
  let regex = /\d/;
  number = regex.test(event.key);

  

  if(number == true){
    keyNum(event.key);
    showDisplay();
  } else if(event.key =="."){
    keyNum(event.key);
    checkDecimal();
    showDisplay();
  }
});

// Keydown event capturing the operators and other items e.g (del, ac, enter)
document.addEventListener("keydown", (event)=>{
  console.log(event);

  switch(event.key){
    case "+":
      keyOp("+")
      showDisplay();
      break;
    
    case "-":
      keyOp("-");
      showDisplay();
      break;

    case "/":
      keyOp("/");
      showDisplay();
      break;
    
    case "*":
      keyOp("*");
      showDisplay();
      break;

    case "Enter":
      popModal();
      showDisplay();
      break;
    
    case "Backspace":
      calcDel();
      showDisplay();
      break;

    case "Delete":
      clearCache();
      showDisplay();
  }
});

//-------------Event listeners for the buttons on the calculator----------------

// Event listener attached to each of the number buttons
numberButtons.forEach((number) => {
  number.addEventListener("click", ()=>{
    keyNum(number.textContent);
    showDisplay();
    checkDecimal();
  });
});


// Removing additional decimals !NEEDS WORK!!
decimal.addEventListener("click", ()=>{
  checkDecimal()
});

// Event listener attached to each of the op buttons
opButtons.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    keyOp(operator.innerHTML);
    showDisplay();
  })
});

// Event listener for the ac button - 
ac.addEventListener("click", ()=>{
  clearCache();
  showDisplay();
});



// Adds event for the equals key
op.addEventListener("click", ()=>{
  popModal();  
});

// Adds event for del key
del.addEventListener("click", ()=>{
  calcDel();
});



















