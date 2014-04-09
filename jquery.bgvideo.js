(function($) {

    $.fn.bgVideo = function( options ) {

        var settings = $.extend({
            originalWidth         : 1280,
            originalHeight        : 720,
            resize                : true,
            parentClass           : 'bgVideoContainer',
            fill                  : true


        }, options);


        if(settings.resize){
           $(window).resize(this.resizeHandler);
           console.log('starting the resizehandler');

        }



        this.resizeHandler = function(e){
          console.log('ik kom in de resizehandler');
            if(Modernizr.video){
              var width = $(window).width();
              var height = $(window).height();

              var imgEq = width/height;
              var videoEq = settings.originalWidth/settings.originalHeight;
              var vw = width;
              var vh = width/videoEq;

              vh = width/videoEq;

              if(settings.fill){
                console.log('ik kom hierin');

                if(imgEq <= videoEq){
                  vw = height * videoEq;
                  vh = height;
                }else{
                  vw = width;
                }
                $(this).css({'width':vw,"height":vh});

              }else{
                  var centerHor = ($(this).height() - vh)/2;
                  $(this).css({'width':vw,"height":vh,'top':centerHor});
              }

            }
          }

         




    }

}(jQuery));
