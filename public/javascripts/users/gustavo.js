
$(function(){

    var root = $('#gustavo')
    console.log(root)
})

app
  .controller('GustavoController', ['$scope', function($scope) {
/*    $scope.args = [
      {key: 'Name', text:'Insert your name:', value:''},
      {key: 'Age', text:'Insert your age', value:''}];
 
    $scope.addObj = function() {
      $scope.args.push({id:$scope.argKey, text:$scope.argText, value:$scope.argValue});
    };
 
    $scope.summary = function() {
      var summaryText = '';
      angular.forEach($scope.args, function(arg) {
        finalText += arg.argKey + " - " + arg.argValue;
      });
      return finalText;
    };*/

    $scope.fields={name:'Gustavo', age:'32'}
    $scope.log=function(){
        console.log($scope.fields.name)

    }

    $scope.log1=function(){
        console.log($scope.fields)

    }

  }]);