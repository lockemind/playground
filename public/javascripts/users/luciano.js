$(function(){
    var $node = $('#luciano h3:first')
    $node.addClass('luciano-a')
    
    $node.mouseover(function(){
        $(this).addClass('luciano-b')
    })
    $node.mouseout(function(){
        $(this).addClass('luciano-a')
    })
})      