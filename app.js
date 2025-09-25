//____________CHAPTER 31-38_______________________
//__________________________________________QUESTION NO 1
// function tellTime() {
//      var now = new Date();
//     alert("Today is: " + now);
// }
// tellTime();
//___________________________________________QUESTION NO 2
// function greetUser(){
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name:   ");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName)
// }
// greetUser();

//________________________________________QUESTION NO 3
// function sum( num1 , num2) {
// var num1 = parseInt(prompt("Enter number 1"));
// var num2 = parseInt( prompt("Enter number 2 ")) ;
// var sumValues = num1 + num2;
// alert(sumValues);
// }
// sum()
//__________________________________________QUESTION NO 4
function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else {
    console.log("Invalid operator! ");
  }
}
  var value1 = +prompt("Enter first number");
  var value2 = +prompt("Enter second number");
  var oper = prompt("Enter operator ");

calculator(value1 , value2 ,  oper);


//________________________________QUESTION NO 5

























