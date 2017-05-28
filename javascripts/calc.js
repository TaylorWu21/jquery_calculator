// Why use jquery?
// * jQuery is a javascript library that makes event handling a lot easier
// * It has many helper function we can use to make manipulating the DOM

// Here is the link to jQuery Documentation 
// http://api.jquery.com/

// Basic jQuery Syntax
// * First we need to call on the jQuery libraru with a '$'
// * Then we use the element selector. We can get the element tag, id, or class
// * Then we can call any jQuery methods we want on it.
// Here's how it looks
// * $('SELECTED_ELEMENT').METHOD()
// Selecting with Element tag
// $('h1')
// Selecting with an id
// $('#header')
// Selecing with a class
// $('.btn')

// With jquery we can grab elements with less syntax as vanilla javascript

// vanilla js way of getting element
// var numberButtons = getElementsByClassName('number_button');

// jQuery variables usually starts with a '$'. It will return an array with the same class name
// var $numberButtons = $('.number_button')
// this will return an array of all html elements with the 'number_button' class
// $('.number_button');

// *** Now that we understand the basic syntax of jQuery lets build the calculator ***

// We need variables to save our numbers and operators
var leftNumber = '';
var rightNumber = '';
var operator = '';
var result = '';

// Now we need to check when a user clicks a number
$('.number_button').click( function() {
  // check if the user has selected on operator yet
  if(operator) {
    rightNumber += this.innerText;
  } else {
    leftNumber += this.innerText;
  }

  setScreen(leftNumber + ' ' + operator + ' ' + rightNumber);
  // console.log('right Number', rightNumber);
  // console.log('left number', leftNumber);
});

// Here we check which operator button they clicked
$('.operator_button').click( function() {
  // console.log(this.innerText);
  operator = this.innerText;
  setScreen(leftNumber + ' ' + operator)
});

// Check when they press the equal button
$('#equal_button').click( function() {
  // console.log(leftNumber);
  // console.log(operator);
  // console.log(rightNumber);
  var firstNum = parseFloat(leftNumber);
  var secondNum = parseFloat(rightNumber);

  if(leftNumber && operator && rightNumber) {
    switch(operator) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case 'x':
        result = firstNum * secondNum;
        break;
      case '/':
        result = firstNum / secondNum;
        if(secondNum === 0) {
          result = 'Cannot Divide By 0. Please Clear and try again';
        }
        break;
    }
  } else {
    result = 'Invalid Operation Clear and Try Again.'
  }
  setScreen(result)
  // set result to the first number and clears the second, so user can keep computing
  leftNumber = result;
  rightNumber = '';
});

// Clear everything out when user clicks it
$('#clear_button').click( function() {
  leftNumber = '';
  rightNumber = '';
  operator = '';
  setScreen('');
});

function setScreen(answer) {
  // using jQuery to get my output div
  // .text() is a jQuery method that takes in an argument and will display it to the innerText
  $('#output').text(answer)
}

