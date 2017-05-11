console.log("client.js sourced");

// need to create a controller
var myApp = angular.module('myApp', []);

myApp.controller('TheController', function(HighFive){
  var vm = this;
  // vm.characterSkillLevel;
  // var successNum;
  // var highFiveCount;
  // var message = "";

  vm.highFive = function() {
    console.log("in highFive button!!");
    vm.characterSkillLevel = HighFive.generateNum(1,10);
    vm.successNum = HighFive.generateNum(1,10);
    console.log("characterSkill : ",vm.characterSkillLevel);
    console.log("successNum : ",vm.successNum);
    // console.log("ran num after: ", ranNum);


    if (vm.successNum >= vm.characterSkillLevel){
      console.log("GREAT HIGH FIVE TEAM");
      vm.message = "great high five team!";
      HighFive.updateCounter();
      console.log("This is the count: "+HighFive.getCount());
      vm.highFiveCount = HighFive.getCount();
    }
    else {
      console.log("try again with the fives");
      vm.message = "try again with the fives";
    }
  };




});
