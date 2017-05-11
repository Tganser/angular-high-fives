myApp.service('HighFive', function(){

  var theNum;

  this.generateNum = function(min, max){
      // console.log("in generateNum");
      // console.log(Math.floor(Math.random() * (1 + max - min) + min));
      theNum = Math.floor(Math.random() * (1+max - min) + min);
      return theNum;
    };



});
