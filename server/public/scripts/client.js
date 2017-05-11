console.log("client.js sourced");

// need to create a controller
var myApp = angular.module('myApp', []);

myApp.controller('TheController', function(HighFive){
  var vm = this;
  var ranNum = 0;

  vm.highFive = function() {
    console.log("in highFive button!!");
    console.log(ranNum);
    ranNum = HighFive.generateNum(1,10);
    console.log(HighFive.generateNum(1,10));
    console.log(ranNum);
  };
});
