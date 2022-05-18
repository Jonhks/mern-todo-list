const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

function isIfFryday (today){
  console.log(today)
  return today == 'Friday' ? 'TGFI' : 'Nope'
}  

Given('Today is ${string}', function(givenDay){
  this.today = givenDay
})

When('I ask wheater it Friday yet', function(){
  this.actualAnswer = isIfFryday(this.today)
})

Then('I should be told ${string}', function(expectAnswer){
  assert.equal(this.actualAnswer, expectAnswer )
})

console.log(this.today, 123231)