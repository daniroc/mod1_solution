(function(){
'use strict';
angular.module("Mod1App",[])
.controller("Mod1Controller",Mod1Controller)

Mod1Controller.$inject = ['$scope'];
function Mod1Controller($scope){
  $scope.inputText = "";
  $scope.myStyle = "";
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
      $scope.myStyle={color:'red',border:'2px solid red',width:'150px'}
      $scope.outputText = "Please enter data first";
    }else if(wordsNumber<4){
      $scope.myStyle={color:'green',border:'2px solid green',width:'150px'}
      $scope.outputText = "Enjoy!";
    }else{
      $scope.myStyle={color:'green',border:'2px solid green',width:'150px'}
      $scope.outputText = "Too much!";
    }
  }
}

})();
