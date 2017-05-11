console.log("client.js sourced");

var myApp = angular.module('myApp', []);

myApp.controller('TheController', function(HighFive, SuccessCount){
  var vm = this;

  vm.ch1img = '<img src="https://68.media.tumblr.com/854478134d3c10e56c0046444e6b8be1/tumblr_ncgyv3a0dt1s6205uo1_500.jpg"/>';
  vm.ch1name = "Pam";
  vm.ch1info = "mvp of the office";


  vm.highFive = function() {
    console.log("in highFive button!!");
    vm.characterSkillLevel = HighFive.generateNum(1,10);
    vm.successNum = HighFive.generateNum(1,10);
    console.log("characterSkill : ",vm.characterSkillLevel);
    console.log("successNum : ",vm.successNum);


    if (vm.successNum >= vm.characterSkillLevel){
      console.log("GREAT HIGH FIVE TEAM");
      vm.message = "great high five team!";
      SuccessCount.updateCounter();
      console.log("This is the count: "+SuccessCount.getCount());
      vm.highFiveCount = SuccessCount.getCount();
    }
    else {
      console.log("try again with the fives");
      vm.message = "try again with the fives";
    }
  };




});
