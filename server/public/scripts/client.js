console.log("client.js sourced");

var myApp = angular.module('myApp', ['ngRoute']);

// Angular configuration
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // we're bring in $routeProvider, which is a small part of ngRoute,
  // this allows us to do client-side navigation
  $routeProvider
    .when('/pam', {
      templateUrl: 'views/pam.html',
      controller: 'TheController',
      controllerAs: 'vm'
    })
    .when('/jim', {
      templateUrl: 'views/jim.html',
      controller: 'JimController',
      controllerAs: 'vm'
    })
    .when('/dwight', {
      templateUrl: 'views/dwight.html',
      controller: 'DwightController',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'views/pam.html',
      controller: 'TheController',
      controllerAs: 'vm'
    });

    $locationProvider.html5Mode(true);
}]);

myApp.controller('TheController', function(HighFive, SuccessCount){
  var vm = this;

  vm.ch1img = '<img src="https://68.media.tumblr.com/854478134d3c10e56c0046444e6b8be1/tumblr_ncgyv3a0dt1s6205uo1_500.jpg"/>';
  vm.ch1name = "Pam";
  vm.ch1info = "mvp of the office";

  vm.characterSkillLevel = HighFive.generateNum(6,10);
  vm.count = 0;
  vm.highFiveCount = SuccessCount.getCount();

  vm.highFive = function() {
    console.log("in highFive button!!");
    vm.successNum = HighFive.generateNum(1,10);
    console.log("characterSkill : ",vm.characterSkillLevel);
    console.log("successNum : ",vm.successNum);


    if (vm.successNum >= vm.characterSkillLevel){
      vm.message = "success!";
      SuccessCount.updateCounter();
      vm.count++;
      console.log("This is the count: "+SuccessCount.getCount());
      vm.highFiveCount = SuccessCount.getCount();
    }
    else {
      vm.message = "try again with the fives";
      vm.highFiveCount = SuccessCount.getCount();

    }
  };
});

myApp.controller('JimController', function(HighFive, SuccessCount){
  var vm = this;

  // vm.ch1img = '<img src="https://68.media.tumblr.com/854478134d3c10e56c0046444e6b8be1/tumblr_ncgyv3a0dt1s6205uo1_500.jpg"/>';
  vm.ch1name = "Jim";
  // vm.ch1info = "mvp of the office";

  vm.characterSkillLevel = HighFive.generateNum(4,10);
  vm.count = 0;
  vm.highFiveCount = SuccessCount.getCount();


  vm.highFive = function() {
    console.log("in highFive button!!");
    vm.successNum = HighFive.generateNum(1,10);
    console.log("characterSkill : ",vm.characterSkillLevel);
    console.log("successNum : ",vm.successNum);


    if (vm.successNum >= vm.characterSkillLevel){
      vm.message = "success!";
      SuccessCount.updateCounter();
      vm.count++;
      console.log("This is the count: "+SuccessCount.getCount());
      vm.highFiveCount = SuccessCount.getCount();
    }
    else {
      vm.message = "try again with the fives";
      vm.highFiveCount = SuccessCount.getCount();

    }
  };
});

myApp.controller('DwightController', function(HighFive, SuccessCount){
  var vm = this;

  // vm.ch1img = '<img src="https://68.media.tumblr.com/854478134d3c10e56c0046444e6b8be1/tumblr_ncgyv3a0dt1s6205uo1_500.jpg"/>';
  vm.ch1name = "Dwight";
  // vm.ch1info = "mvp of the office";

  vm.characterSkillLevel = HighFive.generateNum(1,10);
  vm.count = 0;
  vm.highFiveCount = SuccessCount.getCount();


  vm.highFive = function() {
    vm.successNum = HighFive.generateNum(1,10);
    console.log("characterSkill : ",vm.characterSkillLevel);
    console.log("successNum : ",vm.successNum);


    if (vm.successNum >= vm.characterSkillLevel){
      vm.message = "success!";
      SuccessCount.updateCounter();
      vm.count++;
      console.log("This is the count: "+SuccessCount.getCount());
      vm.highFiveCount = SuccessCount.getCount();
    }
    else {
      console.log("try again with the fives");
      vm.message = "try again with the fives";
      vm.highFiveCount = SuccessCount.getCount();

    }
  };
});
