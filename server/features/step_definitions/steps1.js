const { Before, Given, When, Then } = require('@cucumber/cucumber');

let x;

Given('I buy drilling tool worth ${int}', function(int){
  x = int
})

Given('I buy the plant worth ${int}', function(int){
  x = x + int
})

Then('Total due month is ${int}', function(int){
  x
  console.log(x)
})