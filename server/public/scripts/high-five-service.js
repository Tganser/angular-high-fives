myApp.service('HighFive', function(){

  var theNum;

  this.generateNum = function(min, max){
      console.log("in generateNum");
      theNum = Math.floor(Math.random() * (1 + max - min) + min);
    };

  this.numGetter = function(){
    console.log("in numGetter");
    return theNum;
  };

});
