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

//Linking vars to the buttons displayed on html
const total = document.getElementById("total");
const op = document.getElementById("op");
const numberButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");


// Event listener attached to each of the number buttons
numberButtons.forEach((number) => {
  number.addEventListener("click", ()=>{
    console.log("this is a number")
    showNumber(number.textContent)
  })
});

// Event listener attached to each of the op buttons
opButtons.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    console.log("this is an operator")
    showNumber(operator.textContent)
  })
})





// Capturing all the buttons and attaching event listener to each
// document.querySelectorAll('button').forEach(e =>{
//   e.addEventListener("click", ()=> {
//     showNumber(e.textContent);
//   });
// });

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
  console.log(numTotal);
  const total = numTotal.split(/([-+*\/])/g)
  console.log(total)
  changeToNum(total)
})



// function changeToNum(arr){
//  let =  newArr = []
//   for (let i = 0; i < arr.length; i++){
//     if(isNaN(arr[i])){
//       operator = arr[i]
//       console.log(operator)
//       console.log("This is an operator");
//       console.log(operator);
//     } else {
//       console.log(parseInt(arr[i]))
//         newNum = parseInt(arr[i])
//         newArr.push(newNum);
//         console.log("this is not an operator ")
//     }
//   }
//   };


  let currentNum = 8
  let prevNum = 9
  let opState = "/"
  

  function calculate(){
    if(opState == "/"){
      currentNum = cal.div(prevNum, currentNum);
    };
    return currentNum
  };


  console.log(calculate())












