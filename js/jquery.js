$(document).ready(function(){

    $('.menu').click(function () {
      $(".header-nav").toggle();
      $(".overlay").fadeToggle(300);
      if ($('body').hasClass('lock-scroll')) {
         $('body').removeClass('lock-scroll');
        }
      else {
          $('body').addClass('lock-scroll');
        }
    });

    $('.overlay').click(function () {
        $(".overlay").hide();
        $(".header-nav").toggle();
        $('#menutoggle').prop('checked', false);
        $('body').removeClass('lock-scroll');
    });

    $("#drop-down-toggle-evaluation-types").click(function () {
        $("#drop-down-toggle-evaluation-reasons").prop( "checked", false );
        $("#drop-down-toggle-legislation").prop( "checked", false );
    });

    $("#drop-down-toggle-evaluation-reasons").click(function () {
        $("#drop-down-toggle-evaluation-types").prop( "checked", false );
        $("#drop-down-toggle-legislation").prop( "checked", false );
    });

    $("#drop-down-toggle-legislation").click(function () {
        $("#drop-down-toggle-evaluation-reasons").prop( "checked", false );
        $("#drop-down-toggle-evaluation-types").prop( "checked", false );
    });

    $(".main-content, .hero-image").click(function () {
        $("#drop-down-toggle-evaluation-reasons").prop( "checked", false );
        $("#drop-down-toggle-evaluation-types").prop( "checked", false );
        $("#drop-down-toggle-legislation").prop( "checked", false );
    });

    // var boxArray = ['evaluation-types-drop-down','evaluation-reasons-drop-down','legislation-drop-down'];
    // window.addEventListener('mouseup', function(event){
    //     for(var i=0; i < boxArray.length; i++){
    // 	    var box = document.getElementById(boxArray[i]);
    //         if(event.target != box && event.target.parentNode != box){
    //            box.style.display = 'none';
    //         }
    //     }
    // });


});
