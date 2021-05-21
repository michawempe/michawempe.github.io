// Load Video
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

var video0 = document.getElementById("v0");
var video1 = document.getElementById("v1");
var video2 = document.getElementById("v2");
var video3 = document.getElementById("v3");
var video4 = document.getElementById("v4");

if (is_firefox) {
  video0.src = "https://www.dropbox.com/s/91iwfbjy70yrw02/Corporate_FF_210520.ogv?raw=1";
  video1.src = "https://www.dropbox.com/s/11aegxjfc18dskh/Magazin_FF_210520.ogv?raw=1";
  video2.src = "https://www.dropbox.com/s/7vv937rlx5fxo97/Plakat_FF_210520.ogv?raw=1";
  video3.src = examle.ogv;
  video4.src = "https://www.dropbox.com/s/aiwckdci1z4jntn/Generativ_FF_210520.ogv?raw=1";
}

else {
  video0.src = "https://www.dropbox.com/s/q2bptjxflaxrckn/Corporate_1080_210517.mp4?raw=1";
  video1.src = "https://www.dropbox.com/s/h9gjkjcnp9ugx2d/Magazin_1080_210517.mp4?raw=1";
  video2.src = "https://www.dropbox.com/s/zekcgjjql5a71qr/Plakat_1080_210517.mp4?raw=1";
  video3.src = "examle.mp4";
  video4.src = "https://www.dropbox.com/s/evb44wf3pbouk8q/Generativ_1080_210517.mp4?raw=1";
}


// Animate Video

var frameNumber = 0;
var playbackConst = [850, 970, 1700, 1500, 1470];

value = 0;

window.onscroll = function() {
  if ((window.pageYOffset) <= 4000) {
    value = 0;
  } else if ((window.pageYOffset) <= 8000) {
    value = 1;
  } else if ((window.pageYOffset) <= 12000) {
    value = 2;
  } else if ((window.pageYOffset) <= 16000) {
    value = 3;
  } else {
    value = 4;
  }

  video = document.getElementById('v' + value);

  function scrollPlay(){
    var frameNumber  = (window.pageYOffset - (value * 4000))/playbackConst[value];
    video.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }
  window.requestAnimationFrame(scrollPlay);
};


// Navigation Box Indicator

document.onmousewheel = function( e ) {
  var animationBox = ((window.pageYOffset / 4000) * (window.innerHeight / 5) - 8);
  document.getElementById("navigationBox").style.top = animationBox + "px";
};


// Text Box Show / Hide

function myFunction(value) {
  var x = document.getElementById("TextBox" + value);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
