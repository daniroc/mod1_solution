(function(){
'use strict';
angular.module("Mod1App",[])
.controller("Mod1Controller",Mod1Controller)

Mod1Controller.$inject = ['$scope'];
function Mod1Controller($scope){
  $scope.inputText = "";
  $scope.pStyle = "";
  $scope.inputStyle = "";
  $scope.outputText = "";
  $scope.writeText = function(){
    var wordsNumber = 0;
    var wordsArray = $scope.inputText.split(",");
    for(var i=0;i<wordsArray.length;i++){
      if(wordsArray[i].length>0 && wordsArray[i].trim()!==""){
        wordsNumber++;
      }
    }
    if($scope.inputText.replace(/,/g,"").trim().length<1){
      $scope.pStyle={color:'red'}
      $scope.inputStyle={border:'2px solid red'}
      $scope.outputText = "Please enter data first";
    }else if(wordsNumber<4){
      $scope.pStyle={color:'green'}
      $scope.inputStyle={border:'2px solid green'}
      $scope.outputText = "Enjoy!";
    }else{
      $scope.pStyle={color:'green'}
      $scope.inputStyle={border:'2px solid green'}
      $scope.outputText = "Too much!";
    }
  }
}

})();
