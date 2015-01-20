
app.controller('PedroController', ['$scope', function($scope) {
  
  $scope.color = 'white';

  var $domNode = $('#pedro .pedro-circle:first')

  $scope.color

}]);

function animateCircle(){
    var localData
    var $domNode = $('#pedro .pedro-circle:first')
    var xPosition = 0
    var direction = "leftToRight"

    function colorShift(){ 
        
        $.ajax({
            url:"pedro/colorCycle",
            type: "GET",
        }).done(function(data) {
            
            $domNode.css({ 'border-color': data.color})
        })
        
    }

    function pedroDraw(){
        
        if (direction == "leftToRight") {
            xPosition++ 
            if (xPosition == 300) {
                direction = "rightToLeft"
                colorShift()
            }
        } else {
            xPosition--
            if (xPosition == 0) {
                direction = "leftToRight"
                colorShift()
            }
        }
        
        $domNode.css({ left : xPosition + "px"})
        
        window.requestAnimationFrame(pedroDraw)
    }

    colorShift()
    pedroDraw()
}

$(animateCircle)