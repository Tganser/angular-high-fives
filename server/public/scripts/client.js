console.log("client.js sourced");

// need to create a controller
var myApp = angular.module('myApp', []);

myApp.controller('TheController', function(HighFive){
  var vm = this;
  var characterSkillLevel;
  var successNum;

  vm.highFive = function() {
    console.log("in highFive button!!");
    console.log("ranNum to start : ",ranNum);
    characterSkillLevel = HighFive.generateNum(1,10);
    successNum = HighFive.generateNum(1,10);
    console.log("after running random number funciton: ",HighFive.generateNum(1,10));
    // console.log("ran num after: ", ranNum);


    if (successNum >= characterSkillLevel){
      console.log("GREAT HIGH FIVE TEAM");
      HighFive.updateCounter();
      console.log("This is the count: "+HighFive.getCount);
    }
    else {
      console.log("try again with the fives");
    }
  };




});
