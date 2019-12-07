      var flipHorizontal = false;
      var imageElement = document.getElementById('cat');
      imageElement.crossOrigin = true;
      var cnvs = document.getElementById("myCanvas");
      cnvs.style.position = "absolute";
      cnvs.style.left = imageElement.offsetLeft + "px";
      cnvs.style.top = imageElement.offsetTop + "px";
      
    posenet.load().then(function(net) {
      const pose = net.estimateSinglePose(imageElement, {
        flipHorizontal: false
      });
      return pose;
    }).then(function(pose){
     console.log(pose);

     for (var i =0; i<17; i++){
      var ctx = cnvs.getContext("2d");
      ctx.beginPath();
      ctx.arc(pose.keypoints[i].position['x'], pose.keypoints[i].position['y'], 2, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#00ff00';
      ctx.stroke();

     }


    })


   /*
    Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
 });
 Webcam.attach( '#my_camera' );

      Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = 
        '<img src="'+data_uri+'"/>';
        } );
    

*/

        
        

