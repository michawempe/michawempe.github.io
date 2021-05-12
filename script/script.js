var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback

// video 1

playbackConstOne = 700,

// select video element
vidOne = document.getElementById('v0');
// var vid = $('#v0')[0]; // jquery option


// Use requestAnimationFrame for smooth playback
function scrollPlayOne(){
  var frameNumber  = (window.pageYOffset)/playbackConstOne;
  vidOne.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayOne);
}
window.requestAnimationFrame(scrollPlayOne);

// video 2

playbackConstTwo = 1200,

vidTwo = document.getElementById('v1');

function scrollPlayTwo(){
  var frameNumber  = (window.pageYOffset - 4000)/playbackConstTwo;
  vidTwo.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayTwo);
}
window.requestAnimationFrame(scrollPlayTwo);

// video 3

playbackConstThree = 2200,

vidThree = document.getElementById('v2');

function scrollPlayThree(){
  var frameNumber  = (window.pageYOffset - 8000)/playbackConstThree;
  vidThree.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayThree);
}
window.requestAnimationFrame(scrollPlayThree);

// video 4

playbackConstFour = 1800,

vidFour = document.getElementById('v3');

function scrollPlayFour(){
  var frameNumber  = (window.pageYOffset - 12000)/playbackConstFour;
  vidFour.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayFour);
}
window.requestAnimationFrame(scrollPlayFour);

// video 5

playbackConstFive = 1700,

vidFive = document.getElementById('v4');

function scrollPlayFive(){
  var frameNumber  = (window.pageYOffset - 16000)/playbackConstFive;
  vidFive.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayFive);
}
window.requestAnimationFrame(scrollPlayFive);

document.onmousewheel = function( e ) {
  var animationBox = (window.pageYOffset / 4000) * (window.innerHeight / 5);
  document.getElementById("navigationBox").style.top = animationBox + "px";
};
