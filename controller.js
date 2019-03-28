angular.module('todoApp', [])
  .controller('TodoListController', function() {

    var vm = this;
    vm.valueCurrency = 1.0000;
    
    vm.currenciesOption = [
      {
        name: "USD",
        detail: "United States Dollar" 
      },
      {
        name: "CAD",
        detail: "Candian Dollar" 
      },
      {
        name: "IDR",
        detail: "Indonesian Dollar" 
      },
      {
        name: "GBP",
        detail: "Great Britain Pounds" 
      },
      {
        name: "CHF",
        detail: "Swiss Franc" 
      },
      {
        name: "SGD",
        detail: "Singapore Dollar" 
      },
      {
        name: "INR",
        detail: "Indian Rupee" 
      },
      {
        name: "MYR",
        detail: "Malaysian Ringgit" 
      },
      {
        name: "JPY",
        detail: "Japanese Yen" 
      },
      {
        name: "KRW",
        detail: "Korean won" 
      }
    ]

  });