(function($) {

    $.fn.bgVideo = function( options ) {

        var settings = $.extend({
            originalWidth         : 1280,
            originalHeight        : 720,
            resize                : true,
            fill                  : true,
            mp4Src                : false,
            ogvSrc                : false,
            imgSrc                : false,
            options               : 'autoplay loop',
            mobileVideo           : false
        }, options);

        var self = this;
        function loadHandler(){
          if(Modernizr.video){
            if(!settings.mobileVideo){
              setVideoProperties();
            }else{
              if($(window).width() > settings.mobileVideo){
                setVideoProperties();
              }else{
                setImageProperties();
              }
            }
          }else{
            setImageProperties();
          }

          resizeHandler(null);
        }
        function setVideoProperties(){
            $(self).append("<video "+ settings.options+" class='bgVideoSrc'></video>");
            if(settings.mp4Src){
              $(self).find('video').append("<source src='" + settings.mp4Src + "'  type='video/mp4'></source>")
            }
            if(settings.ogvSrc){
                $(self).find('video').append("<source src='" + settings.ogvSrc + "'  type='video/ogg codecs=theora,vorbis'></source>")
            }
        }

        function setImageProperties(){
            $(self).append("<img src=' "+ settings.imgSrc+"' class='bgVideoSrc'></img>");
        }


        function resizeHandler(e){

              if(Modernizr.video){
              var width = $(self).width();
              var height = $(self).height();
              $(self).css({'overflow':'hidden'});
              $(self).find('.bgVideoSrc').css({'position':'absolute'});

              var imgEq = width/height;
              var videoEq = settings.originalWidth/settings.originalHeight;
              var vw = width;
              var vh = width/videoEq;

              vh = width/videoEq;

              if(settings.fill){

                if(imgEq <= videoEq){
                  vw = height * videoEq;
                  vh = height;
                  vDiff = (width - vw)/2;
                  $(self).find('.bgVideoSrc').css({'left':vDiff,'top':0});

                }else{
                  vw = width;
                  hDiff = (height - vh)/2;
                  $(self).find('.bgVideoSrc').css({'top':hDiff,'left':0});

                }
                 $(self).find('.bgVideoSrc').css({'width':vw,"height":vh});
              }else{
                if(imgEq <= videoEq){
                  var centerHor = ($(self).height() - vh)/2;
                  $(self).find('.bgVideoSrc').css({'width':vw,"height":vh,'top':centerHor,'left':0});
                }else{
                  vw = height * videoEq;
                  vh = height;
                  var centerVer = ($(self).width() - vw)/2;
                  $(self).find('.bgVideoSrc').css({'width':vw,"height":vh,'left':centerVer,'top':'0px'});
                }

              }

            }
          }
          


        if(settings.resize){
           $(window).resize(resizeHandler);
        }
        loadHandler();
    }

}(jQuery));
