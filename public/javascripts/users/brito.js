
$(function(){

    var root = $('#brito')
    console.log(root)
})

app.controller('BritoController', ['$scope', function($scope) {
  $scope.sayHello = 'Greetings from Brito Controller!';
}]);