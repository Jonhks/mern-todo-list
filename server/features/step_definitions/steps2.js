const { Before, Given, When, Then } = require('@cucumber/cucumber');
const data = require('../../routes/todoitems.js')

Given('Probando que hace bien el get', function(data){
  console.log(data)
  data
})