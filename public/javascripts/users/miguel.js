$(function(){

    var root = $('#miguel')
    console.log(root)
})


app.controller("miguelController", ['$scope', '$personalData', function($scope, $personalData) {

    // $scope.fullName = $personalData.fullname;
    // $scope.age = $personalData.age;
    // $scope.cityAddress = $personalData.cityAddress;
    // $scope.phone = $personalData.phone;

    $scope.fullName = 'Miguel Leite';
    $scope.age = '22';
    $scope.cityAddress = 'Maia';
    $scope.phone = '912223344';

    $scope.msg = 'Call me! :)';

  }]);)