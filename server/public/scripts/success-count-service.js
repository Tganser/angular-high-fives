myApp.service('SuccessCount', function(){

  var successCounter = 0;

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
