myApp.service('HighFive', function(){

  var theNum;
  var successCounter = 0;

  this.generateNum = function(min, max){
      // console.log("in generateNum");
      // console.log(Math.floor(Math.random() * (1 + max - min) + min));
      theNum = Math.floor(Math.random() * (1 + max - min) + min);
      return theNum;
    };


  this.updateCounter = function(){
    console.log("updating the counter!");
    successCounter++;
    return successCounter;
  };

  this.getCount = function(){
    console.log("in getCount");
    return successCounter;
  };

});
