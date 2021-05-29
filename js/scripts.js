$(function(){
    $('#guideAnchor').click(function(){
        if ($('#guideBtns').hasClass('collapse')){
            $('#guideBtns').removeClass('collapse');
        }
    });
    $('#normPlayBtn').click(function(){
        if ($('#normPlayP').hasClass('collapse')){
            $('#normPlayP').removeClass('collapse');
        } else {
            $('#normPlayP').addClass('collapse');
        }
    });
    $('#combatBtn').click(function(){
        if ($('#combatP').hasClass('collapse')){
            $('#combatP').removeClass('collapse');
        } else {
            $('#combatP').addClass('collapse');
        }
    });
});