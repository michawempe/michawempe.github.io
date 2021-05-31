// Playing Video on Scroll

var frameNumber = 0;
var playbackConst = [450, 480, 900, 600, 1440];

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

document.onscroll = function( e ) {
  var animationBox = ((window.pageYOffset / 4000) * (window.innerHeight / 5) - 8);
  document.getElementById("navigationBox").style.top = animationBox + "px";
};


// Text Box Show / Hide

var clicked = false;

function myFunction(value) {
  var x = document.getElementById("TextBox" + value);
  if (x.style.display === "none") {
    x.style.display = "block";
    clicked = true;
  } else {
    x.style.display = "none";
    clicked = false;
  }
}

function hoverFunction(value) {
  var x = document.getElementById("TextBox" + value);
  x.style.display = "block";
}

function hoverFunctionOut(value) {
  var x = document.getElementById("TextBox" + value);
  if (clicked == true) {
    x.style.display = "block";
  } else if (clicked == false){
    x.style.display = "none";
  }
}
