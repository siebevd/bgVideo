#Bgvideo


Bgvideo is a simple jquery plugin that lets you set a video as a background to a div (or screen). The video will stretch to fit the screen or be absolute positioned to be in the center. There is also a image fallback for mobile devices or browsers that don't support the video tag.

## Setup 

  Include the jquery  and Modernizr ( both required!) and videobg in your html file. 
  
  Basic 
   ```
  $('parentdiv').bgvideo(options);
   ```
  Example: 
  ```
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script type="text/javascript" src="jquery.bgvideo.js" ></script>
  <script>

  $('.videobg').bgVideo({
  	mobileVideo : 700,
  	mp4Src :'/assets/bg.mp4',
  	imgSrc :'/assets/bg.jpg'
  });
  </script>
```
## Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `originalWidth` | The original width of the video. This is being use to calculate the ratio of the video | int | 1280
| `originalHeight` | The original height of the video. This is being use to calculate the ratio of the video | int | 720
| `resize` | if the video should resize when the browser is being resized | boolean | true
| `fill` | if the video should fit in the parent div or keep it's dimensions with added top or left positioning | boolean | true
| `mp4Src` | The source to the mp4 video file | string | false
| `ogvSrc` | The source to the ogv video file | string | false
| `imgSrc` | The source to the image file ( will be used to replace image if on small screen or video nog supported) | string | false
| `options` | the options for the video tag (ex. autoplay loop muted) | string | autoplay loop
| `mobilevideo` | if the video should be an image on load if the window is smaller then size given ( if it should always be a video just set it to false) | int | false


